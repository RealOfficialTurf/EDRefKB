const scale=2;
var keybinds={"General Controls": {},"Ship Controls": {},"SRV Controls": {},"On Foot Controls": {}};
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
	let keybinds={"General Controls": {},"Ship Controls": {},"SRV Controls": {},"On Foot Controls": {}};
	for(let i=0;i<x.documentElement.children.length;i++) {
		//console.log(x.documentElement.children[i].tagName);
		let y=x.documentElement.children[i];
		if(y.firstElementChild&&y.children[0].tagName=="Primary"&&y.children[1].tagName=="Secondary") {
			let action=actions[y.tagName]? actions[y.tagName].action as string:y.tagName;
			let area=actions[y.tagName]? actions[y.tagName].area as string:"";
			let key=y.children[0].attributes[1].nodeValue;
			//console.log(action+": "+key);
			if(key) {
				switch(area) {
					case "General Controls":
					case "Ship Controls":
					case "SRV Controls":
					case "On Foot Controls":
						if(!keybinds[area][key]) {
							keybinds[area][key]=[];
						}
						keybinds[area][key].push(action);
						break;
					default:
				}
			}
		}
	}
	return keybinds;
}
const selection=(document.getElementById("bindareasel") as HTMLSelectElement);
function selectarea() {
	let selectedarea=selection.options[selection.selectedIndex].value;
	for(let i in keyboard) {
		let b=keyboard[i] as Button;
		if(keybinds[selectedarea][i]) {
			b.actions=keybinds[selectedarea][i] as string[];
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
selection.addEventListener("change",updateCanvas);
function updateCanvas(e: Event){
	selectarea();
	draw();
}
//(document.getElementById("bindcvs") as HTMLCanvasElement).addEventListener('load', draw) //doesn't seem to work

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