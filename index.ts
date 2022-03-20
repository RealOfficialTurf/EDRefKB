type Bind={
	readonly action: string,
	readonly key: String,
	readonly modifiers: string[];
};
type AllAreas="General Controls"|"Ship Controls"|"SRV Controls"|"On Foot Controls";
var keybinds: {[T in AllAreas]: Bind[]}={"General Controls": [],"Ship Controls": [],"SRV Controls": [],"On Foot Controls": []};
function readFile(f: File): Promise<string> {
	return new Promise((resolve: (value: string) => void,reject) => {
		const reader=new FileReader();
		reader.onloadend=(e: ProgressEvent) => {
			console.log((e.target as FileReader).result as string);
			resolve((e.target as FileReader).result as string);
		};
		reader.readAsText(f);
	});
}
function readbindcfg(x: Document): {"General Controls": Bind[]; "Ship Controls": Bind[]; "SRV Controls": Bind[]; "On Foot Controls": Bind[];} {
	console.log(x.documentElement.children);
	let kbs: {[T in AllAreas]: Bind[]}={"General Controls": [],"Ship Controls": [],"SRV Controls": [],"On Foot Controls": []};
	for(let i of x.documentElement.children) {
		//	<PhotoCameraToggle>
		//		<Primary Device="Keyboard" Key="Key_Space">
		//			<Modifier Device="Keyboard" Key="Key_LeftControl" />
		//			<Modifier Device="Keyboard" Key="Key_LeftAlt" />
		//		</Primary>
		//		<Secondary Device="{NoDevice}" Key="" />
		//	</PhotoCameraToggle>
		//	<HumanoidItemWheelButton>
		//		<Primary Device="Keyboard" Key="Key_LeftAlt">
		//			<Hold Value="1" />
		//		</Primary>
		//		<Secondary Device="{NoDevice}" Key="" />
		//	</HumanoidItemWheelButton>
		let i1=i.children[0];
		let i2=i.children[1];
		if(i.firstElementChild&&i1.tagName=="Primary"&&i2.tagName=="Secondary") {
			let actioncode=i.tagName; //<PhotoCameraToggle>
			let test=actions[actioncode as AllActions];
			let action=test? test.action:actioncode;
			let area=test? test.area:"";
			if(i1.attributes[0].nodeValue=="Keyboard") {
				//The key is from a keyboard, put it in!
				let key1=i1.attributes[1].nodeValue;
				let key1mods: string[]=[];
				for(let j of i1.children) {
					if(j.tagName=="Modifier") {
						let modifier=j.attributes[1].nodeValue;
						if(modifier) {
							key1mods.push(modifier);
						}
					}
				}
				if(key1) {
					switch(area) {
						case "General Controls":
						case "Ship Controls":
						case "SRV Controls":
						case "On Foot Controls":
							kbs[area].push({action: action,key: key1,modifiers: key1mods});
							break;
						default:
					}
				}
			}
			if(i2.attributes[0].nodeValue=="Keyboard") {
				//The key is from a keyboard, put it in!
				let key2=i2.attributes[1].nodeValue;
				let key2mods: string[]=[];
				for(let j of i2.children) {
					if(j.tagName=="Modifier") {
						let modifier=j.attributes[1].nodeValue;
						if(modifier) {
							key2mods.push(modifier);
						}
					}
				}
				if(key2) {
					switch(area) {
						case "General Controls":
						case "Ship Controls":
						case "SRV Controls":
						case "On Foot Controls":
							kbs[area].push({action: action,key: key2,modifiers: key2mods});
							break;
						default:
					}
				}
			}
		}
	}
	return kbs;
}
const selection=(document.getElementById("bindareasel") as HTMLSelectElement);
function selectarea() {
	for(let i in keyboard) {
		keyboard[i].mappedactions=[];
	}
	let selectedarea: AllAreas=selection.options[selection.selectedIndex].value as AllAreas;
	for(let i=0;i<keybinds[selectedarea].length;i++) {
		if(keybinds[selectedarea][i]) {
			let x=keybinds[selectedarea][i];
			let y=keyboard[x.key as AllKeys];
			if(y!==undefined) {
				y.mappedactions.push({action: x.action,modifiers: x.modifiers});
			}
		}
	}
	console.log(keyboard);
}
(document.getElementById("bindfile") as HTMLInputElement).addEventListener("input",updateValue);
function updateValue(e: Event) {
	console.log(e);
	if(!e.target) {
		throw "Target event is empty!!";
	}
	console.log(e.target);
	let x=e.target as HTMLInputElement;
	if(!x.files||!x.files[0]) {
		throw "No files detected!";
	}
	console.log(x.files[0]);
	readFile(x.files[0]).then(data => {
		const a=new DOMParser();
		keybinds=readbindcfg(a.parseFromString(data,"text/xml"));
		selectarea();
		draw();
	});
}
//For testing purposes, but this can be used for showing default keybinds....
function updateWithDefaultValue() {
	const a=new DOMParser();
	keybinds=readbindcfg(a.parseFromString(bind_4_0_keyboardmouseonly,"text/xml"));
	selectarea();
	draw();
}
selection.addEventListener("change",updateCanvas);
function updateCanvas(e: Event) {
	selectarea();
	draw();
}
function draw() {
	const cctx=(document.getElementById("bindcvs") as HTMLCanvasElement).getContext("2d");
	const width=cctx? cctx.canvas.width:0;
	const height=cctx? cctx.canvas.height:0;
	if(!cctx) {
		return;
	}
	cctx.fillStyle="white";
	cctx.fillRect(0,0,width,height);
	cctx.fillStyle="black";
	cctx.strokeRect(0,0,width,height);
	for(let i in keyboard) {
		let x=keyboard[i].drawkey(cctx);
	}
};