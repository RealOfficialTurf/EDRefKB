const scale=2;
type Bind={
	readonly action: string,
	readonly key: String;
};
type AllAreas="General Controls"|"Ship Controls"|"SRV Controls"|"On Foot Controls";
var keybinds: {[T in AllAreas]: Bind[]}={"General Controls": [],"Ship Controls": [],"SRV Controls": [],"On Foot Controls": []};
function readFile(f: File) {
	return new Promise((resolve: (value: string) => void,reject) => {
		const reader=new FileReader();
		reader.onloadend=(e: ProgressEvent) => {
			console.log((e.target as FileReader).result as string);
			resolve((e.target as FileReader).result as string);
		};
		reader.readAsText(f);
	});
}
function readbindcfg(x: Document) {
	console.log(x.documentElement);
	console.log(x.documentElement.children);
	let kbs: {[T in AllAreas]: Bind[]}={"General Controls": [],"Ship Controls": [],"SRV Controls": [],"On Foot Controls": []};
	for(let i=0;i<x.documentElement.children.length;i++) {
		//console.log(x.documentElement.children[i].tagName);
		let y=x.documentElement.children[i];
		if(y.firstElementChild&&y.children[0].tagName=="Primary"&&y.children[1].tagName=="Secondary") {
			let y1=y.children[0];
			let y2=y.children[1];
			let test=actions[y.tagName as AllActions];
			let action=test? test.action:y.tagName;
			let area=test? test.area:"";
			let firstkey=y1.attributes[1].nodeValue as string;
			let secondkey=y2.attributes[1].nodeValue as string;
			if(y) {
				//console.log(action+": "+key);
				if(firstkey) {
					switch(area) {
						case "General Controls":
						case "Ship Controls":
						case "SRV Controls":
						case "On Foot Controls":
							kbs[area].push({action: action,key: firstkey});
							break;
						default:
					}
				}
				if(secondkey) {
					switch(area) {
						case "General Controls":
						case "Ship Controls":
						case "SRV Controls":
						case "On Foot Controls":
							kbs[area].push({action: action,key: secondkey});
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
	for(let i in keyboard){
		keyboard[i].actions = [];
	}
	let selectedarea: AllAreas=selection.options[selection.selectedIndex].value as AllAreas;
	for(let i=0;i<keybinds[selectedarea].length;i++) {
		if(keybinds[selectedarea][i]) {
			let x=keybinds[selectedarea][i];
			let y=keyboard[x.key as AllKeys];
			if(y!==undefined) {
				y.actions.push(x.action);
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