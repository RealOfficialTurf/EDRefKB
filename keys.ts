const enum Gaps {
	StartX=20,
	StartY=274,
	KeyX=12,
	FirstRow0=114,
	FirstRow4=86,
	FirstRow8=62,
	SixthRow0=196,
	SixthRow3=196,
	EditRowA=44,
	EditRowB=44,
	KeyY=8
}
const enum SizeX {
	Key=130,
	Double=Key*2+Gaps.KeyX,
	Backspace=214,
	Tab=190,
	Backslash=154,
	Caps=228,
	Enter=258,
	Shift=314,
	Ctrl=196,
	Alt=196,
	Space=860
}
const enum SizeY {
	Key=120,
	Double=Key*2+Gaps.KeyY,
}
const enum PosX { //All lined up nicely!
	FirstRow00=Gaps.StartX,
	FirstRow01=FirstRow00+SizeX.Key+Gaps.FirstRow0,
	FirstRow02=FirstRow01+SizeX.Key+Gaps.KeyX,
	FirstRow03=FirstRow02+SizeX.Key+Gaps.KeyX,
	FirstRow04=FirstRow03+SizeX.Key+Gaps.KeyX,
	FirstRow05=FirstRow04+SizeX.Key+Gaps.FirstRow4,
	FirstRow06=FirstRow05+SizeX.Key+Gaps.KeyX,
	FirstRow07=FirstRow06+SizeX.Key+Gaps.KeyX,
	FirstRow08=FirstRow07+SizeX.Key+Gaps.KeyX,
	FirstRow09=FirstRow08+SizeX.Key+Gaps.FirstRow8,
	FirstRow10=FirstRow09+SizeX.Key+Gaps.KeyX,
	FirstRow11=FirstRow10+SizeX.Key+Gaps.KeyX,
	FirstRow12=FirstRow11+SizeX.Key+Gaps.KeyX,
	SecondRow00=FirstRow00,
	SecondRow01=SecondRow00+SizeX.Key+Gaps.KeyX,
	SecondRow02=SecondRow01+SizeX.Key+Gaps.KeyX,
	SecondRow03=SecondRow02+SizeX.Key+Gaps.KeyX,
	SecondRow04=SecondRow03+SizeX.Key+Gaps.KeyX,
	SecondRow05=SecondRow04+SizeX.Key+Gaps.KeyX,
	SecondRow06=SecondRow05+SizeX.Key+Gaps.KeyX,
	SecondRow07=SecondRow06+SizeX.Key+Gaps.KeyX,
	SecondRow08=SecondRow07+SizeX.Key+Gaps.KeyX,
	SecondRow09=SecondRow08+SizeX.Key+Gaps.KeyX,
	SecondRow10=SecondRow09+SizeX.Key+Gaps.KeyX,
	SecondRow11=SecondRow10+SizeX.Key+Gaps.KeyX,
	SecondRow12=SecondRow11+SizeX.Key+Gaps.KeyX,
	SecondRow13=SecondRow12+SizeX.Key+Gaps.KeyX,
	ThirdRow00=SecondRow00,
	ThirdRow01=ThirdRow00+SizeX.Tab+Gaps.KeyX,
	ThirdRow02=ThirdRow01+SizeX.Key+Gaps.KeyX,
	ThirdRow03=ThirdRow02+SizeX.Key+Gaps.KeyX,
	ThirdRow04=ThirdRow03+SizeX.Key+Gaps.KeyX,
	ThirdRow05=ThirdRow04+SizeX.Key+Gaps.KeyX,
	ThirdRow06=ThirdRow05+SizeX.Key+Gaps.KeyX,
	ThirdRow07=ThirdRow06+SizeX.Key+Gaps.KeyX,
	ThirdRow08=ThirdRow07+SizeX.Key+Gaps.KeyX,
	ThirdRow09=ThirdRow08+SizeX.Key+Gaps.KeyX,
	ThirdRow10=ThirdRow09+SizeX.Key+Gaps.KeyX,
	ThirdRow11=ThirdRow10+SizeX.Key+Gaps.KeyX,
	ThirdRow12=ThirdRow11+SizeX.Key+Gaps.KeyX,
	ThirdRow13=ThirdRow12+SizeX.Key+Gaps.KeyX,
	FourthRow00=ThirdRow00,
	FourthRow01=FourthRow00+SizeX.Caps+Gaps.KeyX,
	FourthRow02=FourthRow01+SizeX.Key+Gaps.KeyX,
	FourthRow03=FourthRow02+SizeX.Key+Gaps.KeyX,
	FourthRow04=FourthRow03+SizeX.Key+Gaps.KeyX,
	FourthRow05=FourthRow04+SizeX.Key+Gaps.KeyX,
	FourthRow06=FourthRow05+SizeX.Key+Gaps.KeyX,
	FourthRow07=FourthRow06+SizeX.Key+Gaps.KeyX,
	FourthRow08=FourthRow07+SizeX.Key+Gaps.KeyX,
	FourthRow09=FourthRow08+SizeX.Key+Gaps.KeyX,
	FourthRow10=FourthRow09+SizeX.Key+Gaps.KeyX,
	FourthRow11=FourthRow10+SizeX.Key+Gaps.KeyX,
	FourthRow12=FourthRow11+SizeX.Key+Gaps.KeyX,
	FifthRow00=FourthRow00,
	FifthRow01=FifthRow00+SizeX.Shift+Gaps.KeyX,
	FifthRow02=FifthRow01+SizeX.Key+Gaps.KeyX,
	FifthRow03=FifthRow02+SizeX.Key+Gaps.KeyX,
	FifthRow04=FifthRow03+SizeX.Key+Gaps.KeyX,
	FifthRow05=FifthRow04+SizeX.Key+Gaps.KeyX,
	FifthRow06=FifthRow05+SizeX.Key+Gaps.KeyX,
	FifthRow07=FifthRow06+SizeX.Key+Gaps.KeyX,
	FifthRow08=FifthRow07+SizeX.Key+Gaps.KeyX,
	FifthRow09=FifthRow08+SizeX.Key+Gaps.KeyX,
	FifthRow10=FifthRow09+SizeX.Key+Gaps.KeyX,
	FifthRow11=FifthRow10+SizeX.Key+Gaps.KeyX,
	SixthRow0=FifthRow00,
	SixthRow1=SixthRow0+SizeX.Ctrl+Gaps.SixthRow0,
	SixthRow2=SixthRow1+SizeX.Alt+Gaps.KeyX,
	SixthRow3=SixthRow2+SizeX.Space+Gaps.KeyX,
	SixthRow4=SixthRow3+SizeX.Alt+Gaps.SixthRow3,
	EditRow0=((FirstRow12+SizeX.Key)+(SecondRow13+SizeX.Backspace)+(ThirdRow13+SizeX.Backslash)+(FourthRow12+SizeX.Enter)+(FifthRow11+SizeX.Shift)+(SixthRow4+SizeX.Ctrl))/6+Gaps.EditRowA,
	EditRow1=EditRow0+SizeX.Key+Gaps.KeyX,
	EditRow2=EditRow1+SizeX.Key+Gaps.KeyX,
	EditRow3=EditRow2+SizeX.Key+Gaps.EditRowB,
	EditRow4=EditRow3+SizeX.Key+Gaps.KeyX,
	EditRow5=EditRow4+SizeX.Key+Gaps.KeyX,
	EditRow6=EditRow5+SizeX.Key+Gaps.KeyX,
}
const enum PosY { //All lined up nicely!
	FirstRow=Gaps.StartY,
	SecondRow=FirstRow+SizeY.Key+Gaps.KeyY,
	ThirdRow=SecondRow+SizeY.Key+Gaps.KeyY,
	FourthRow=ThirdRow+SizeY.Key+Gaps.KeyY,
	FifthRow=FourthRow+SizeY.Key+Gaps.KeyY,
	SixthRow=FifthRow+SizeY.Key+Gaps.KeyY,
}
class Button {
	readonly name: string;
	readonly x: number;
	readonly y: number;
	readonly w: number;
	readonly h: number;
	mappedactions: {action: string,modifiers: string[];}[];
	drawkey(ctx: CanvasRenderingContext2D): void {
		ctx.strokeRect(this.x,this.y,this.w,this.h);
		ctx.font="bold 24px sans-serif";
		ctx.textAlign="right";
		ctx.fillText(this.name,this.x+this.w-4,this.y+24);
		ctx.textAlign="left";
		ctx.font="12px sans-serif";
		for(let i=this.mappedactions.length-1;i>=0;i--) {
			let x=this.x+4;
			let y=this.y+this.h-4-(12*(this.mappedactions.length-1-i));
			//Sure, we could just do
			//ctx.fillText(this.mappedactions[i].modifiers.join("")+this.mappedactions[i].action,x,y);
			//But then we can't give font colors for the modifier...
			ctx.fillStyle="red";
			for(let j of this.mappedactions[i].modifiers) {
				switch(j) {
					case "Key_LeftControl":
						j="LCtrl "; break;
					case "Key_RightControl":
						j="RCtrl "; break;
					case "Key_LeftShift":
						j="LShift "; break;
					case "Key_RightShift":
						j="RShift "; break;
					case "Key_LeftAlt":
						j="LAlt "; break;
					case "Key_RightAlt":
						j="RAlt "; break;
					default:
						j="UnknownModifier ";
				}
				ctx.fillText(j,x,y);
				x+=ctx.measureText(j).width;
			}
			ctx.fillStyle="black";
			ctx.fillText(this.mappedactions[i].action,x,y);
		}
	}
	constructor(name: string,x: number,y: number,w: number,h: number) {
		this.name=name;
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.mappedactions=[];
	}
};
type AllKeys="Key_Backspace"|"Key_Tab"|"Key_Enter"|"Key_Pause"|"Key_CapsLock"|"Key_Kana"|"Key_Kanji"|"Key_Escape"|"Key_Convert"|"Key_NoConvert"|"Key_Space"|"Key_PageUp"|"Key_PageDown"|"Key_End"|"Key_Home"|"Key_LeftArrow"|"Key_UpArrow"|"Key_RightArrow"|"Key_DownArrow"|"Key_SYSRQ"|"Key_Insert"|"Key_Delete"|"Key_0"|"Key_1"|"Key_2"|"Key_3"|"Key_4"|"Key_5"|"Key_6"|"Key_7"|"Key_8"|"Key_9"|"Key_A"|"Key_B"|"Key_C"|"Key_D"|"Key_E"|"Key_F"|"Key_G"|"Key_H"|"Key_I"|"Key_J"|"Key_K"|"Key_L"|"Key_M"|"Key_N"|"Key_O"|"Key_P"|"Key_Q"|"Key_R"|"Key_S"|"Key_T"|"Key_U"|"Key_V"|"Key_W"|"Key_X"|"Key_Y"|"Key_Z"|"Key_LeftWin"|"Key_RightWin"|"Key_Apps"|"Key_Sleep"|"Key_Numpad_0"|"Key_Numpad_1"|"Key_Numpad_2"|"Key_Numpad_3"|"Key_Numpad_4"|"Key_Numpad_5"|"Key_Numpad_6"|"Key_Numpad_7"|"Key_Numpad_8"|"Key_Numpad_9"|"Key_Numpad_Multiply"|"Key_Numpad_Add"|"Key_Numpad_Subtract"|"Key_Numpad_Decimal"|"Key_Numpad_Comma"|"Key_Numpad_Divide"|"Key_Numpad_Enter"|"Key_F1"|"Key_F2"|"Key_F3"|"Key_F4"|"Key_F5"|"Key_F6"|"Key_F7"|"Key_F8"|"Key_F9"|"Key_F10"|"Key_F11"|"Key_F12"|"Key_F13"|"Key_F14"|"Key_F15"|"Key_F16"|"Key_F17"|"Key_F18"|"Key_F19"|"Key_F20"|"Key_F21"|"Key_F22"|"Key_F23"|"Key_F24"|"Key_NumLock"|"Key_ScrollLock"|"Key_LeftShift"|"Key_RightShift"|"Key_LeftControl"|"Key_RightControl"|"Key_LeftAlt"|"Key_RightAlt"|"Key_WebBack"|"Key_WebForward"|"Key_WebRefresh"|"Key_WebStop"|"Key_WebSearch"|"Key_WebFavourites"|"Key_WebHome"|"Key_Mute"|"Key_VolumeDown"|"Key_VolumeUp"|"Key_NextTrack"|"Key_PrevTrack"|"Key_MediaStop"|"Key_Stop"|"Key_PlayPause"|"Key_Mail"|"Key_MediaSelect"|"Key_SemiColon"|"Key_Plus"|"Key_Equals"|"Key_Comma"|"Key_Minus"|"Key_Period"|"Key_Slash"|"Key_Grave"|"Key_LeftBracket"|"Key_BackSlash"|"Key_RightBracket"|"Key_Apostrophe"|"Key_OEM_102"|"Key_ä"|"Key_ö"|"Key_ü"|"Key_ß"|"Key_Acute"|"Key_LessThan"|"Key_Circumflex"|"Key_Hash"|"Key_Colon"|"Key_ABNT_C1"|"Key_Yen"|"Key_ABNT_C2"|"Key_Numpad_Equals"|"Key_Underline"|"Key_AX"|"Key_Unlabeled"|"Key_Calculator"|"Key_AT"|"Key_Power"|"Key_Wake"|"Key_MyComputer"|"Key_GreenModifier"|"Key_OrangeModifier";
type KeyMap={[T in AllKeys]?: Button};
const keyboard: KeyMap={
	Key_Backspace: new Button("Backspace",PosX.SecondRow13,PosY.SecondRow,SizeX.Backspace,SizeY.Key),
	Key_Tab: new Button("Tab",PosX.ThirdRow00,PosY.ThirdRow,SizeX.Tab,SizeY.Key),
	Key_Enter: new Button("Enter",PosX.FourthRow12,PosY.FourthRow,SizeX.Enter,SizeY.Key),
	// Key_Pause: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_CapsLock: new Button("Caps",PosX.FourthRow00,PosY.FourthRow,SizeX.Caps,SizeY.Key),
	// Key_Kana:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_Kanji:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_Escape: new Button("Esc",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_Convert:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_NoConvert:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_Space: new Button("Space",PosX.SixthRow2,PosY.SixthRow,SizeX.Space,SizeY.Key),
	Key_PageUp: new Button("PgUp",PosX.EditRow2,PosY.SecondRow,SizeX.Key,SizeY.Key),
	Key_PageDown: new Button("PgDown",PosX.EditRow2,PosY.ThirdRow,SizeX.Key,SizeY.Key),
	Key_End: new Button("End",PosX.EditRow1,PosY.ThirdRow,SizeX.Key,SizeY.Key),
	Key_Home: new Button("Home",PosX.EditRow1,PosY.SecondRow,SizeX.Key,SizeY.Key),
	Key_LeftArrow: new Button("Left",PosX.EditRow0,PosY.SixthRow,SizeX.Key,SizeY.Key),
	Key_UpArrow: new Button("Up",PosX.EditRow1,PosY.FifthRow,SizeX.Key,SizeY.Key),
	Key_RightArrow: new Button("Right",PosX.EditRow2,PosY.SixthRow,SizeX.Key,SizeY.Key),
	Key_DownArrow: new Button("Down",PosX.EditRow1,PosY.SixthRow,SizeX.Key,SizeY.Key),
	// Key_SYSRQ:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_Insert: new Button("Insert",PosX.EditRow0,PosY.SecondRow,SizeX.Key,SizeY.Key),
	Key_Delete: new Button("Delete",PosX.EditRow0,PosY.ThirdRow,SizeX.Key,SizeY.Key),
	Key_0: new Button("0",PosX.SecondRow10,PosY.SecondRow,SizeX.Key,SizeY.Key),
	Key_1: new Button("1",PosX.SecondRow01,PosY.SecondRow,SizeX.Key,SizeY.Key),
	Key_2: new Button("2",PosX.SecondRow02,PosY.SecondRow,SizeX.Key,SizeY.Key),
	Key_3: new Button("3",PosX.SecondRow03,PosY.SecondRow,SizeX.Key,SizeY.Key),
	Key_4: new Button("4",PosX.SecondRow04,PosY.SecondRow,SizeX.Key,SizeY.Key),
	Key_5: new Button("5",PosX.SecondRow05,PosY.SecondRow,SizeX.Key,SizeY.Key),
	Key_6: new Button("6",PosX.SecondRow06,PosY.SecondRow,SizeX.Key,SizeY.Key),
	Key_7: new Button("7",PosX.SecondRow07,PosY.SecondRow,SizeX.Key,SizeY.Key),
	Key_8: new Button("8",PosX.SecondRow08,PosY.SecondRow,SizeX.Key,SizeY.Key),
	Key_9: new Button("9",PosX.SecondRow09,PosY.SecondRow,SizeX.Key,SizeY.Key),
	Key_A: new Button("A",PosX.FourthRow01,PosY.FourthRow,SizeX.Key,SizeY.Key),
	Key_B: new Button("B",PosX.FifthRow05,PosY.FifthRow,SizeX.Key,SizeY.Key),
	Key_C: new Button("C",PosX.FifthRow03,PosY.FifthRow,SizeX.Key,SizeY.Key),
	Key_D: new Button("D",PosX.FourthRow03,PosY.FourthRow,SizeX.Key,SizeY.Key),
	Key_E: new Button("E",PosX.ThirdRow03,PosY.ThirdRow,SizeX.Key,SizeY.Key),
	Key_F: new Button("F",PosX.FourthRow04,PosY.FourthRow,SizeX.Key,SizeY.Key),
	Key_G: new Button("G",PosX.FourthRow05,PosY.FourthRow,SizeX.Key,SizeY.Key),
	Key_H: new Button("H",PosX.FourthRow06,PosY.FourthRow,SizeX.Key,SizeY.Key),
	Key_I: new Button("I",PosX.ThirdRow08,PosY.ThirdRow,SizeX.Key,SizeY.Key),
	Key_J: new Button("J",PosX.FourthRow07,PosY.FourthRow,SizeX.Key,SizeY.Key),
	Key_K: new Button("K",PosX.FourthRow08,PosY.FourthRow,SizeX.Key,SizeY.Key),
	Key_L: new Button("L",PosX.FourthRow09,PosY.FourthRow,SizeX.Key,SizeY.Key),
	Key_M: new Button("M",PosX.FifthRow07,PosY.FifthRow,SizeX.Key,SizeY.Key),
	Key_N: new Button("N",PosX.FifthRow06,PosY.FifthRow,SizeX.Key,SizeY.Key),
	Key_O: new Button("O",PosX.ThirdRow09,PosY.ThirdRow,SizeX.Key,SizeY.Key),
	Key_P: new Button("P",PosX.ThirdRow10,PosY.ThirdRow,SizeX.Key,SizeY.Key),
	Key_Q: new Button("Q",PosX.ThirdRow01,PosY.ThirdRow,SizeX.Key,SizeY.Key),
	Key_R: new Button("R",PosX.ThirdRow04,PosY.ThirdRow,SizeX.Key,SizeY.Key),
	Key_S: new Button("S",PosX.FourthRow02,PosY.FourthRow,SizeX.Key,SizeY.Key),
	Key_T: new Button("T",PosX.ThirdRow05,PosY.ThirdRow,SizeX.Key,SizeY.Key),
	Key_U: new Button("U",PosX.ThirdRow07,PosY.ThirdRow,SizeX.Key,SizeY.Key),
	Key_V: new Button("V",PosX.FifthRow04,PosY.FifthRow,SizeX.Key,SizeY.Key),
	Key_W: new Button("W",PosX.ThirdRow02,PosY.ThirdRow,SizeX.Key,SizeY.Key),
	Key_X: new Button("X",PosX.FifthRow02,PosY.FifthRow,SizeX.Key,SizeY.Key),
	Key_Y: new Button("Y",PosX.ThirdRow06,PosY.ThirdRow,SizeX.Key,SizeY.Key),
	Key_Z: new Button("Z",PosX.FifthRow01,PosY.FifthRow,SizeX.Key,SizeY.Key),
	// Key_LeftWin:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_RightWin:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_Apps:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_Sleep:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_Numpad_0: new Button("0",PosX.EditRow3,PosY.SixthRow,SizeX.Double,SizeY.Key),
	Key_Numpad_1: new Button("1",PosX.EditRow3,PosY.FifthRow,SizeX.Key,SizeY.Key),
	Key_Numpad_2: new Button("2",PosX.EditRow4,PosY.FifthRow,SizeX.Key,SizeY.Key),
	Key_Numpad_3: new Button("3",PosX.EditRow5,PosY.FifthRow,SizeX.Key,SizeY.Key),
	Key_Numpad_4: new Button("4",PosX.EditRow3,PosY.FourthRow,SizeX.Key,SizeY.Key),
	Key_Numpad_5: new Button("5",PosX.EditRow4,PosY.FourthRow,SizeX.Key,SizeY.Key),
	Key_Numpad_6: new Button("6",PosX.EditRow5,PosY.FourthRow,SizeX.Key,SizeY.Key),
	Key_Numpad_7: new Button("7",PosX.EditRow3,PosY.ThirdRow,SizeX.Key,SizeY.Key),
	Key_Numpad_8: new Button("8",PosX.EditRow4,PosY.ThirdRow,SizeX.Key,SizeY.Key),
	Key_Numpad_9: new Button("9",PosX.EditRow5,PosY.ThirdRow,SizeX.Key,SizeY.Key),
	Key_Numpad_Multiply: new Button("*",PosX.EditRow5,PosY.SecondRow,SizeX.Key,SizeY.Key),
	Key_Numpad_Add: new Button("+",PosX.EditRow6,PosY.ThirdRow,SizeX.Key,SizeY.Double),
	Key_Numpad_Subtract: new Button("-",PosX.EditRow6,PosY.SecondRow,SizeX.Key,SizeY.Key),
	Key_Numpad_Decimal: new Button(".",PosX.EditRow5,PosY.SixthRow,SizeX.Key,SizeY.Key),
	// Key_Numpad_Comma: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_Numpad_Divide: new Button("/",PosX.EditRow4,PosY.SecondRow,SizeX.Key,SizeY.Key),
	Key_Numpad_Enter: new Button("Enter",PosX.EditRow6,PosY.FifthRow,SizeX.Key,SizeY.Double),
	Key_F1: new Button("F1",PosX.FirstRow01,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_F2: new Button("F2",PosX.FirstRow02,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_F3: new Button("F3",PosX.FirstRow03,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_F4: new Button("F4",PosX.FirstRow04,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_F5: new Button("F5",PosX.FirstRow05,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_F6: new Button("F6",PosX.FirstRow06,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_F7: new Button("F7",PosX.FirstRow07,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_F8: new Button("F8",PosX.FirstRow08,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_F9: new Button("F9",PosX.FirstRow09,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_F10: new Button("F10",PosX.FirstRow10,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_F11: new Button("F11",PosX.FirstRow11,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_F12: new Button("F12",PosX.FirstRow12,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_F13:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_F14:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_F15:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_F16:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_F17:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_F18:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_F19:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_F20:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_F21:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_F22:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_F23:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_F24:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_NumLock: new Button("Num\nLock",PosX.EditRow3,PosY.SecondRow,SizeX.Key,SizeY.Key),
	// Key_ScrollLock:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_LeftShift: new Button("Shift",PosX.FifthRow00,PosY.FifthRow,SizeX.Shift,SizeY.Key),
	Key_RightShift: new Button("Shift",PosX.FifthRow11,PosY.FifthRow,SizeX.Shift,SizeY.Key),
	Key_LeftControl: new Button("Ctrl",PosX.SixthRow0,PosY.SixthRow,SizeX.Ctrl,SizeY.Key),
	Key_RightControl: new Button("Ctrl",PosX.SixthRow4,PosY.SixthRow,SizeX.Ctrl,SizeY.Key),
	Key_LeftAlt: new Button("Alt",PosX.SixthRow1,PosY.SixthRow,SizeX.Alt,SizeY.Key),
	Key_RightAlt: new Button("Alt",PosX.SixthRow3,PosY.SixthRow,SizeX.Alt,SizeY.Key),
	// Key_WebBack:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_WebForward:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_WebRefresh:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_WebStop:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_WebSearch:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_WebFavourites:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_WebHome:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_Mute:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_VolumeDown:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_VolumeUp:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_NextTrack:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_PrevTrack:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_MediaStop:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_Stop:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_PlayPause:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_Mail:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_MediaSelect:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_SemiColon: new Button(";",PosX.FourthRow10,PosY.FourthRow,SizeX.Key,SizeY.Key),
	// Key_Plus: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	Key_Equals: new Button("=",PosX.SecondRow12,PosY.SecondRow,SizeX.Key,SizeY.Key),
	Key_Comma: new Button(",",PosX.FifthRow08,PosY.FifthRow,SizeX.Key,SizeY.Key),
	Key_Minus: new Button("-",PosX.SecondRow11,PosY.SecondRow,SizeX.Key,SizeY.Key),
	Key_Period: new Button(".",PosX.FifthRow09,PosY.FifthRow,SizeX.Key,SizeY.Key),
	Key_Slash: new Button("/",PosX.FifthRow10,PosY.FifthRow,SizeX.Key,SizeY.Key),
	Key_Grave: new Button("~",PosX.SecondRow00,PosY.SecondRow,SizeX.Key,SizeY.Key),
	Key_LeftBracket: new Button("[",PosX.ThirdRow11,PosY.ThirdRow,SizeX.Key,SizeY.Key),
	Key_BackSlash: new Button("\\",PosX.ThirdRow13,PosY.ThirdRow,SizeX.Backslash,SizeY.Key),
	Key_RightBracket: new Button("]",PosX.ThirdRow12,PosY.ThirdRow,SizeX.Key,SizeY.Key),
	Key_Apostrophe: new Button("\"",PosX.FourthRow11,PosY.FourthRow,SizeX.Key,SizeY.Key),
	// Key_OEM_102:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_ä:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_ö:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_ü:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_ß:new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_Acute: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_LessThan: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_Circumflex: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_Hash: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_Colon: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_ABNT_C1: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_Yen: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_ABNT_C2: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_Numpad_Equals: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_Underline: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_AX: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_Unlabeled: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_Calculator: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_AT: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_Power: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_Wake: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_MyComputer: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_GreenModifier: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key),
	// Key_OrangeModifier: new Button("",PosX.FirstRow00,PosY.FirstRow,SizeX.Key,SizeY.Key)
};
type AllActions=any;//"MouseReset"|"YawLeftButton"|"YawRightButton"|"YawToRollButton"|"RollLeftButton"|"RollRightButton"|"PitchUpButton"|"PitchDownButton"|"LeftThrustButton"|"RightThrustButton"|"UpThrustButton"|"DownThrustButton"|"ForwardThrustButton"|"BackwardThrustButton"|"UseAlternateFlightValuesToggle"|"ToggleReverseThrottleInput"|"ForwardKey"|"BackwardKey"|"SetSpeedMinus100"|"SetSpeedMinus75"|"SetSpeedMinus50"|"SetSpeedMinus25"|"SetSpeedZero"|"SetSpeed25"|"SetSpeed50"|"SetSpeed75"|"SetSpeed100"|"YawLeftButton_Landing"|"YawRightButton_Landing"|"PitchUpButton_Landing"|"PitchDownButton_Landing"|"RollLeftButton_Landing"|"RollRightButton_Landing"|"LeftThrustButton_Landing"|"RightThrustButton_Landing"|"UpThrustButton_Landing"|"DownThrustButton_Landing"|"ForwardThrustButton_Landing"|"BackwardThrustButton_Landing"|"ToggleFlightAssist"|"UseBoostJuice"|"HyperSuperCombination"|"Supercruise"|"Hyperspace"|"DisableRotationCorrectToggle"|"OrbitLinesToggle"|"SelectTarget"|"CycleNextTarget"|"CyclePreviousTarget"|"SelectHighestThreat"|"CycleNextHostileTarget"|"CyclePreviousHostileTarget"|"TargetWingman0"|"TargetWingman1"|"TargetWingman2"|"SelectTargetsTarget"|"WingNavLock"|"CycleNextSubsystem"|"CyclePreviousSubsystem"|"TargetNextRouteSystem"|"PrimaryFire"|"SecondaryFire"|"CycleFireGroupNext"|"CycleFireGroupPrevious"|"DeployHardpointToggle"|"ToggleButtonUpInput"|"DeployHeatSink"|"ShipSpotLightToggle"|"RadarIncreaseRange"|"RadarDecreaseRange"|"IncreaseEnginesPower"|"IncreaseWeaponsPower"|"IncreaseSystemsPower"|"ResetPowerDistribution"|"HMDReset"|"ToggleCargoScoop"|"EjectAllCargo"|"LandingGearToggle"|"MicrophoneMute"|"UseShieldCell"|"FireChaffLauncher"|"ChargeECM"|"WeaponColourToggle"|"EngineColourToggle"|"NightVisionToggle"|"UIFocus"|"FocusLeftPanel"|"FocusCommsPanel"|"QuickCommsPanel"|"FocusRadarPanel"|"FocusRightPanel"|"GalaxyMapOpen"|"SystemMapOpen"|"ShowPGScoreSummaryInput"|"HeadLookToggle"|"Pause"|"FriendsMenu"|"OpenCodexGoToDiscovery"|"PlayerHUDModeToggle"|"ExplorationFSSEnter"|"UI_Up"|"UI_Down"|"UI_Left"|"UI_Right"|"UI_Select"|"UI_Back"|"UI_Toggle"|"CycleNextPanel"|"CyclePreviousPanel"|"CycleNextPage"|"CyclePreviousPage"|"HeadLookReset"|"HeadLookPitchUp"|"HeadLookPitchDown"|"HeadLookYawLeft"|"HeadLookYawRight"|"CamPitchUp"|"CamPitchDown"|"CamYawLeft"|"CamYawRight"|"CamTranslateForward"|"CamTranslateBackward"|"CamTranslateLeft"|"CamTranslateRight"|"CamTranslateUp"|"CamTranslateDown"|"CamZoomIn"|"CamZoomOut"|"CamTranslateZHold"|"GalaxyMapHome"|"ToggleDriveAssist"|"SteerLeftButton"|"SteerRightButton"|"BuggyRollLeftButton"|"BuggyRollRightButton"|"BuggyPitchUpButton"|"BuggyPitchDownButton"|"VerticalThrustersButton"|"BuggyPrimaryFireButton"|"BuggySecondaryFireButton"|"AutoBreakBuggyButton"|"HeadlightsBuggyButton"|"ToggleBuggyTurretButton"|"BuggyCycleFireGroupNext"|"BuggyCycleFireGroupPrevious"|"SelectTarget_Buggy"|"BuggyTurretYawLeftButton"|"BuggyTurretYawRightButton"|"BuggyTurretPitchUpButton"|"BuggyTurretPitchDownButton"|"BuggyToggleReverseThrottleInput"|"IncreaseSpeedButtonMax"|"DecreaseSpeedButtonMax"|"IncreaseEnginesPower_Buggy"|"IncreaseWeaponsPower_Buggy"|"IncreaseSystemsPower_Buggy"|"ResetPowerDistribution_Buggy"|"ToggleCargoScoop_Buggy"|"EjectAllCargo_Buggy"|"RecallDismissShip"|"UIFocus_Buggy"|"FocusLeftPanel_Buggy"|"FocusCommsPanel_Buggy"|"QuickCommsPanel_Buggy"|"FocusRadarPanel_Buggy"|"FocusRightPanel_Buggy"|"GalaxyMapOpen_Buggy"|"SystemMapOpen_Buggy"|"OpenCodexGoToDiscovery_Buggy"|"PlayerHUDModeToggle_Buggy"|"HeadLookToggle_Buggy"|"MultiCrewToggleMode"|"MultiCrewPrimaryFire"|"MultiCrewSecondaryFire"|"MultiCrewPrimaryUtilityFire"|"MultiCrewSecondaryUtilityFire"|"MultiCrewThirdPersonYawLeftButton"|"MultiCrewThirdPersonYawRightButton"|"MultiCrewThirdPersonPitchUpButton"|"MultiCrewThirdPersonPitchDownButton"|"MultiCrewThirdPersonFovOutButton"|"MultiCrewThirdPersonFovInButton"|"MultiCrewCockpitUICycleForward"|"MultiCrewCockpitUICycleBackward"|"OrderRequestDock"|"OrderDefensiveBehaviour"|"OrderAggressiveBehaviour"|"OrderFocusTarget"|"OrderHoldFire"|"OrderHoldPosition"|"OrderFollow"|"OpenOrders"|"PhotoCameraToggle"|"PhotoCameraToggle_Buggy"|"PhotoCameraToggle_Humanoid"|"VanityCameraScrollLeft"|"VanityCameraScrollRight"|"ToggleFreeCam"|"VanityCameraOne"|"VanityCameraTwo"|"VanityCameraThree"|"VanityCameraFour"|"VanityCameraFive"|"VanityCameraSix"|"VanityCameraSeven"|"VanityCameraEight"|"VanityCameraNine"|"VanityCameraTen"|"FreeCamToggleHUD"|"FreeCamSpeedInc"|"FreeCamSpeedDec"|"ToggleReverseThrottleInputFreeCam"|"MoveFreeCamForward"|"MoveFreeCamBackwards"|"MoveFreeCamRight"|"MoveFreeCamLeft"|"MoveFreeCamUp"|"MoveFreeCamDown"|"PitchCameraUp"|"PitchCameraDown"|"YawCameraLeft"|"YawCameraRight"|"RollCameraLeft"|"RollCameraRight"|"ToggleRotationLock"|"FixCameraRelativeToggle"|"FixCameraWorldToggle"|"QuitCamera"|"ToggleAdvanceMode"|"FreeCamZoomIn"|"FreeCamZoomOut"|"FStopDec"|"FStopInc"|"CommanderCreator_Undo"|"CommanderCreator_Redo"|"CommanderCreator_Rotation_MouseToggle"|"GalnetAudio_Play_Pause"|"GalnetAudio_SkipForward"|"GalnetAudio_SkipBackward"|"GalnetAudio_ClearQueue"|"ExplorationFSSCameraPitchIncreaseButton"|"ExplorationFSSCameraPitchDecreaseButton"|"ExplorationFSSCameraYawIncreaseButton"|"ExplorationFSSCameraYawDecreaseButton"|"ExplorationFSSZoomIn"|"ExplorationFSSZoomOut"|"ExplorationFSSMiniZoomIn"|"ExplorationFSSMiniZoomOut"|"ExplorationFSSRadioTuningX_Increase"|"ExplorationFSSRadioTuningX_Decrease"|"ExplorationFSSDiscoveryScan"|"ExplorationFSSQuit"|"ExplorationFSSTarget"|"ExplorationFSSShowHelp"|"ExplorationSAAChangeScannedAreaViewToggle"|"ExplorationSAAExitThirdPerson"|"ExplorationSAANextGenus"|"ExplorationSAAPreviousGenus"|"SAAThirdPersonYawLeftButton"|"SAAThirdPersonYawRightButton"|"SAAThirdPersonPitchUpButton"|"SAAThirdPersonPitchDownButton"|"SAAThirdPersonFovOutButton"|"SAAThirdPersonFovInButton"|"HumanoidForwardButton"|"HumanoidBackwardButton"|"HumanoidStrafeLeftButton"|"HumanoidStrafeRightButton"|"HumanoidRotateLeftButton"|"HumanoidRotateRightButton"|"HumanoidPitchUpButton"|"HumanoidPitchDownButton"|"HumanoidSprintButton"|"HumanoidWalkButton"|"HumanoidCrouchButton"|"HumanoidJumpButton"|"HumanoidPrimaryInteractButton"|"HumanoidSecondaryInteractButton"|"HumanoidItemWheelButton"|"HumanoidEmoteWheelButton"|"HumanoidUtilityWheelCycleMode"|"HumanoidItemWheelButton_XLeft"|"HumanoidItemWheelButton_XRight"|"HumanoidItemWheelButton_YUp"|"HumanoidItemWheelButton_YDown"|"HumanoidPrimaryFireButton"|"HumanoidZoomButton"|"HumanoidThrowGrenadeButton"|"HumanoidMeleeButton"|"HumanoidReloadButton"|"HumanoidSwitchWeapon"|"HumanoidSelectPrimaryWeaponButton"|"HumanoidSelectSecondaryWeaponButton"|"HumanoidSelectUtilityWeaponButton"|"HumanoidSelectNextWeaponButton"|"HumanoidSelectPreviousWeaponButton"|"HumanoidHideWeaponButton"|"HumanoidSelectNextGrenadeTypeButton"|"HumanoidSelectPreviousGrenadeTypeButton"|"HumanoidToggleFlashlightButton"|"HumanoidToggleNightVisionButton"|"HumanoidToggleShieldsButton"|"HumanoidClearAuthorityLevel"|"HumanoidHealthPack"|"HumanoidBattery"|"HumanoidSelectFragGrenade"|"HumanoidSelectEMPGrenade"|"HumanoidSelectShieldGrenade"|"HumanoidSwitchToRechargeTool"|"HumanoidSwitchToCompAnalyser"|"HumanoidSwitchToSuitTool"|"HumanoidToggleToolModeButton"|"HumanoidToggleMissionHelpPanelButton"|"HumanoidPing"|"GalaxyMapOpen_Humanoid"|"SystemMapOpen_Humanoid"|"FocusCommsPanel_Humanoid"|"QuickCommsPanel_Humanoid"|"HumanoidOpenAccessPanelButton"|"HumanoidConflictContextualUIButton"|"StoreEnableRotation"|"StoreCamZoomIn"|"StoreCamZoomOut"|"StoreToggle"|"HumanoidEmoteSlot1"|"HumanoidEmoteSlot2"|"HumanoidEmoteSlot3"|"HumanoidEmoteSlot4"|"HumanoidEmoteSlot5"|"HumanoidEmoteSlot6"|"HumanoidEmoteSlot7"|"HumanoidEmoteSlot8";
type ActionKeys={readonly area: AllAreas,readonly category: string,readonly action: string;};
type ActionMap={readonly [E in AllActions]: ActionKeys};

const actions: ActionMap={
	MouseReset: {area: "Ship Controls",category: "Mouse Controls",action: "Reset Mouse"}, //Auto-generated
	YawLeftButton: {area: "Ship Controls",category: "Flight Rotation",action: "Yaw Left"}, //Auto-generated
	YawRightButton: {area: "Ship Controls",category: "Flight Rotation",action: "Yaw Right"}, //Auto-generated
	YawToRollButton: {area: "Ship Controls",category: "Flight Rotation",action: "Yaw Roll Button"}, //Auto-generated
	RollLeftButton: {area: "Ship Controls",category: "Flight Rotation",action: "Roll Left"}, //Auto-generated
	RollRightButton: {area: "Ship Controls",category: "Flight Rotation",action: "Roll Right"}, //Auto-generated
	PitchUpButton: {area: "Ship Controls",category: "Flight Rotation",action: "Pitch Up"}, //Auto-generated
	PitchDownButton: {area: "Ship Controls",category: "Flight Rotation",action: "Pitch Down"}, //Auto-generated
	LeftThrustButton: {area: "Ship Controls",category: "Flight Thrust",action: "Thrust Left"}, //Auto-generated
	RightThrustButton: {area: "Ship Controls",category: "Flight Thrust",action: "Thrust Right"}, //Auto-generated
	UpThrustButton: {area: "Ship Controls",category: "Flight Thrust",action: "Thrust Up"}, //Auto-generated
	DownThrustButton: {area: "Ship Controls",category: "Flight Thrust",action: "Thrust Down"}, //Auto-generated
	ForwardThrustButton: {area: "Ship Controls",category: "Flight Thrust",action: "Thrust Forward"}, //Auto-generated
	BackwardThrustButton: {area: "Ship Controls",category: "Flight Thrust",action: "Thrust Backward"}, //Auto-generated
	UseAlternateFlightValuesToggle: {area: "Ship Controls",category: "Alternate Flight Controls",action: "Alternate Controls Toggle"}, //Auto-generated
	ToggleReverseThrottleInput: {area: "Ship Controls",category: "Flight Throttle",action: "Forward Only Throttle Reverse"}, //Auto-generated
	ForwardKey: {area: "Ship Controls",category: "Flight Throttle",action: "Increase Throttle"}, //Auto-generated
	BackwardKey: {area: "Ship Controls",category: "Flight Throttle",action: "Decrease Throttle"}, //Auto-generated
	SetSpeedMinus100: {area: "Ship Controls",category: "Flight Throttle",action: "Set Speed to -100%"}, //Auto-generated
	SetSpeedMinus75: {area: "Ship Controls",category: "Flight Throttle",action: "Set Speed to -75%"}, //Auto-generated
	SetSpeedMinus50: {area: "Ship Controls",category: "Flight Throttle",action: "Set Speed to -50%"}, //Auto-generated
	SetSpeedMinus25: {area: "Ship Controls",category: "Flight Throttle",action: "Set Speed to -25%"}, //Auto-generated
	SetSpeedZero: {area: "Ship Controls",category: "Flight Throttle",action: "Set Speed to 0%"}, //Auto-generated
	SetSpeed25: {area: "Ship Controls",category: "Flight Throttle",action: "Set Speed to 25%"}, //Auto-generated
	SetSpeed50: {area: "Ship Controls",category: "Flight Throttle",action: "Set Speed to 50%"}, //Auto-generated
	SetSpeed75: {area: "Ship Controls",category: "Flight Throttle",action: "Set Speed to 75%"}, //Auto-generated
	SetSpeed100: {area: "Ship Controls",category: "Flight Throttle",action: "Set Speed to 100%"}, //Auto-generated
	YawLeftButton_Landing: {area: "Ship Controls",category: "Flight Landing Overrides",action: "Yaw Left"}, //Auto-generated
	YawRightButton_Landing: {area: "Ship Controls",category: "Flight Landing Overrides",action: "Yar Right"}, //Auto-generated
	PitchUpButton_Landing: {area: "Ship Controls",category: "Flight Landing Overrides",action: "Pitch Up"}, //Auto-generated
	PitchDownButton_Landing: {area: "Ship Controls",category: "Flight Landing Overrides",action: "Pitch Down"}, //Auto-generated
	RollLeftButton_Landing: {area: "Ship Controls",category: "Flight Landing Overrides",action: "Roll Left"}, //Auto-generated
	RollRightButton_Landing: {area: "Ship Controls",category: "Flight Landing Overrides",action: "Roll Right"}, //Auto-generated
	LeftThrustButton_Landing: {area: "Ship Controls",category: "Flight Landing Overrides",action: "Thrust Left"}, //Auto-generated
	RightThrustButton_Landing: {area: "Ship Controls",category: "Flight Landing Overrides",action: "Thrust Right"}, //Auto-generated
	UpThrustButton_Landing: {area: "Ship Controls",category: "Flight Landing Overrides",action: "Thrust Up"}, //Auto-generated
	DownThrustButton_Landing: {area: "Ship Controls",category: "Flight Landing Overrides",action: "Thrust Down"}, //Auto-generated
	ForwardThrustButton_Landing: {area: "Ship Controls",category: "Flight Landing Overrides",action: "Thrust Forward"}, //Auto-generated
	BackwardThrustButton_Landing: {area: "Ship Controls",category: "Flight Landing Overrides",action: "Thrust Backward"}, //Auto-generated
	ToggleFlightAssist: {area: "Ship Controls",category: "Flight Miscellaneous",action: "Toggle Flight Assist"}, //Auto-generated
	UseBoostJuice: {area: "Ship Controls",category: "Flight Miscellaneous",action: "Engine Boost"}, //Auto-generated
	HyperSuperCombination: {area: "Ship Controls",category: "Flight Miscellaneous",action: "Toggle Frame Shift Drive"}, //Auto-generated
	Supercruise: {area: "Ship Controls",category: "Flight Miscellaneous",action: "Supercruise"}, //Auto-generated
	Hyperspace: {area: "Ship Controls",category: "Flight Miscellaneous",action: "Hyperspace Jump"}, //Auto-generated
	DisableRotationCorrectToggle: {area: "Ship Controls",category: "Flight Miscellaneous",action: "Rotational Correction"}, //Auto-generated
	OrbitLinesToggle: {area: "Ship Controls",category: "Flight Miscellaneous",action: "Toggle Orbit Lines"}, //Auto-generated
	SelectTarget: {area: "Ship Controls",category: "Targeting",action: "Select Target Ahead"}, //Auto-generated
	CycleNextTarget: {area: "Ship Controls",category: "Targeting",action: "Cycle Next Target"}, //Auto-generated
	CyclePreviousTarget: {area: "Ship Controls",category: "Targeting",action: "Cycle Previous Ship"}, //Auto-generated
	SelectHighestThreat: {area: "Ship Controls",category: "Targeting",action: "Select Highest Threat"}, //Auto-generated
	CycleNextHostileTarget: {area: "Ship Controls",category: "Targeting",action: "Cycle Next Hostile Target"}, //Auto-generated
	CyclePreviousHostileTarget: {area: "Ship Controls",category: "Targeting",action: "Cycle Previous Hostile Ship"}, //Auto-generated
	TargetWingman0: {area: "Ship Controls",category: "Targeting",action: "Select Teammate 1"}, //Auto-generated
	TargetWingman1: {area: "Ship Controls",category: "Targeting",action: "Select Teammate 2"}, //Auto-generated
	TargetWingman2: {area: "Ship Controls",category: "Targeting",action: "Select Teammate 3"}, //Auto-generated
	SelectTargetsTarget: {area: "Ship Controls",category: "Targeting",action: "Select Teammates's Target"}, //Auto-generated
	WingNavLock: {area: "Ship Controls",category: "Targeting",action: "Teammate Nav-Lock"}, //Auto-generated
	CycleNextSubsystem: {area: "Ship Controls",category: "Targeting",action: "Cycle Next Subsystem"}, //Auto-generated
	CyclePreviousSubsystem: {area: "Ship Controls",category: "Targeting",action: "Cycle Previous Subsystem"}, //Auto-generated
	TargetNextRouteSystem: {area: "Ship Controls",category: "Targeting",action: "Target Next System In Route"}, //Auto-generated
	PrimaryFire: {area: "Ship Controls",category: "Weapons",action: "Primary Fire"}, //Auto-generated
	SecondaryFire: {area: "Ship Controls",category: "Weapons",action: "Secondary Fire"}, //Auto-generated
	CycleFireGroupNext: {area: "Ship Controls",category: "Weapons",action: "Cycle Next Fire Group"}, //Auto-generated
	CycleFireGroupPrevious: {area: "Ship Controls",category: "Weapons",action: "Cycle Previous Firgroup"}, //Auto-generated
	DeployHardpointToggle: {area: "Ship Controls",category: "Weapons",action: "Deploy Hardpoints"}, //Auto-generated
	ToggleButtonUpInput: {area: "Ship Controls",category: "Cooling",action: "Silent Running"}, //Auto-generated
	DeployHeatSink: {area: "Ship Controls",category: "Cooling",action: "Deploy Heatsink"}, //Auto-generated
	ShipSpotLightToggle: {area: "Ship Controls",category: "Miscellaneous",action: "Ship Lights"}, //Auto-generated
	RadarIncreaseRange: {area: "Ship Controls",category: "Miscellaneous",action: "Increase Sensor Zoom"}, //Auto-generated
	RadarDecreaseRange: {area: "Ship Controls",category: "Miscellaneous",action: "Decrease Sensor Zoom"}, //Auto-generated
	IncreaseEnginesPower: {area: "Ship Controls",category: "Miscellaneous",action: "Divert Power to Engines"}, //Auto-generated
	IncreaseWeaponsPower: {area: "Ship Controls",category: "Miscellaneous",action: "Divert Power to Weapons"}, //Auto-generated
	IncreaseSystemsPower: {area: "Ship Controls",category: "Miscellaneous",action: "Divert Power to System"}, //Auto-generated
	ResetPowerDistribution: {area: "Ship Controls",category: "Miscellaneous",action: "Balance Power Distribution"}, //Auto-generated
	HMDReset: {area: "Ship Controls",category: "Miscellaneous",action: "Reset HMD Orientation"}, //Auto-generated
	ToggleCargoScoop: {area: "Ship Controls",category: "Miscellaneous",action: "Cargo Scoop"}, //Auto-generated
	EjectAllCargo: {area: "Ship Controls",category: "Miscellaneous",action: "Jettison All Cargo"}, //Auto-generated
	LandingGearToggle: {area: "Ship Controls",category: "Miscellaneous",action: "Landing Gear"}, //Auto-generated
	MicrophoneMute: {area: "Ship Controls",category: "Miscellaneous",action: "Microphone Mute"}, //Auto-generated
	UseShieldCell: {area: "Ship Controls",category: "Miscellaneous",action: "Use Shield Cell"}, //Auto-generated
	FireChaffLauncher: {area: "Ship Controls",category: "Miscellaneous",action: "Use Chaff Launcher"}, //Auto-generated
	ChargeECM: {area: "Ship Controls",category: "Miscellaneous",action: "Charge Ecm"}, //Auto-generated
	WeaponColourToggle: {area: "Ship Controls",category: "Miscellaneous",action: "Weapon Color"}, //Auto-generated
	EngineColourToggle: {area: "Ship Controls",category: "Miscellaneous",action: "Engine Color"}, //Auto-generated
	NightVisionToggle: {area: "Ship Controls",category: "Miscellaneous",action: "Night Vision"}, //Auto-generated
	UIFocus: {area: "Ship Controls",category: "Mode Switches",action: "UI Focus"}, //Auto-generated
	FocusLeftPanel: {area: "Ship Controls",category: "Mode Switches",action: "External Panel"}, //Auto-generated
	FocusCommsPanel: {area: "Ship Controls",category: "Mode Switches",action: "Comms Panel"}, //Auto-generated
	QuickCommsPanel: {area: "Ship Controls",category: "Mode Switches",action: "Quick Comms"}, //Auto-generated
	FocusRadarPanel: {area: "Ship Controls",category: "Mode Switches",action: "Role Panel"}, //Auto-generated
	FocusRightPanel: {area: "Ship Controls",category: "Mode Switches",action: "Internal Panel"}, //Auto-generated
	GalaxyMapOpen: {area: "Ship Controls",category: "Mode Switches",action: "Open Galaxy Map"}, //Auto-generated
	SystemMapOpen: {area: "Ship Controls",category: "Mode Switches",action: "Open System Map"}, //Auto-generated
	ShowPGScoreSummaryInput: {area: "Ship Controls",category: "Mode Switches",action: "Show CQC Score Screen"}, //Auto-generated
	HeadLookToggle: {area: "Ship Controls",category: "Mode Switches",action: "Headlook"}, //Auto-generated
	Pause: {area: "Ship Controls",category: "Mode Switches",action: "Game Menu"}, //Auto-generated
	FriendsMenu: {area: "Ship Controls",category: "Mode Switches",action: "Friends Menu"}, //Auto-generated
	OpenCodexGoToDiscovery: {area: "Ship Controls",category: "Mode Switches",action: "Open Discovery"}, //Auto-generated
	PlayerHUDModeToggle: {area: "Ship Controls",category: "Mode Switches",action: "Switch Cockpit Mode"}, //Auto-generated
	ExplorationFSSEnter: {area: "Ship Controls",category: "Mode Switches",action: "Enter FSS Mode"}, //Auto-generated
	UI_Up: {area: "General Controls",category: "Interface Mode",action: "UI Panel Up"}, //Auto-generated
	UI_Down: {area: "General Controls",category: "Interface Mode",action: "UI Panel Down"}, //Auto-generated
	UI_Left: {area: "General Controls",category: "Interface Mode",action: "UI Panel Left"}, //Auto-generated
	UI_Right: {area: "General Controls",category: "Interface Mode",action: "UI Panel Right"}, //Auto-generated
	UI_Select: {area: "General Controls",category: "Interface Mode",action: "UI Panel Select"}, //Auto-generated
	UI_Back: {area: "General Controls",category: "Interface Mode",action: "UI Panel Back"}, //Auto-generated
	UI_Toggle: {area: "General Controls",category: "Interface Mode",action: "UI Nested Toggle"}, //Auto-generated
	CycleNextPanel: {area: "General Controls",category: "Interface Mode",action: "Next Panel Tab"}, //Auto-generated
	CyclePreviousPanel: {area: "General Controls",category: "Interface Mode",action: "Previous Panel Tab"}, //Auto-generated
	CycleNextPage: {area: "General Controls",category: "Interface Mode",action: "Next Page"}, //Auto-generated
	CyclePreviousPage: {area: "General Controls",category: "Interface Mode",action: "Previous Page"}, //Auto-generated
	HeadLookReset: {area: "Ship Controls",category: "Headlook Mode",action: "Reset Headlook"}, //Auto-generated
	HeadLookPitchUp: {area: "Ship Controls",category: "Headlook Mode",action: "Look Up"}, //Auto-generated
	HeadLookPitchDown: {area: "Ship Controls",category: "Headlook Mode",action: "Look Down"}, //Auto-generated
	HeadLookYawLeft: {area: "Ship Controls",category: "Headlook Mode",action: "Look Left"}, //Auto-generated
	HeadLookYawRight: {area: "Ship Controls",category: "Headlook Mode",action: "Look Right"}, //Auto-generated
	CamPitchUp: {area: "General Controls",category: "Galaxy Map",action: "Galaxy Cam Pitch Up"}, //Auto-generated
	CamPitchDown: {area: "General Controls",category: "Galaxy Map",action: "Galaxy Cam Pitch Down"}, //Auto-generated
	CamYawLeft: {area: "General Controls",category: "Galaxy Map",action: "Galaxy Cam Yaw Left"}, //Auto-generated
	CamYawRight: {area: "General Controls",category: "Galaxy Map",action: "Galaxy Cam Yaw Right"}, //Auto-generated
	CamTranslateForward: {area: "General Controls",category: "Galaxy Map",action: "Galaxy Cam Translate Forward"}, //Auto-generated
	CamTranslateBackward: {area: "General Controls",category: "Galaxy Map",action: "Galaxy Cam Translate Backward"}, //Auto-generated
	CamTranslateLeft: {area: "General Controls",category: "Galaxy Map",action: "Galaxy Cam Translate Left"}, //Auto-generated
	CamTranslateRight: {area: "General Controls",category: "Galaxy Map",action: "Galaxy Cam Translate Right"}, //Auto-generated
	CamTranslateUp: {area: "General Controls",category: "Galaxy Map",action: "Galaxy Cam Translate Up"}, //Auto-generated
	CamTranslateDown: {area: "General Controls",category: "Galaxy Map",action: "Galaxy Cam Translate Down"}, //Auto-generated
	CamZoomIn: {area: "General Controls",category: "Galaxy Map",action: "Galaxy Cam Zoom In"}, //Auto-generated
	CamZoomOut: {area: "General Controls",category: "Galaxy Map",action: "Galaxy Cam Zoom Out"}, //Auto-generated
	CamTranslateZHold: {area: "General Controls",category: "Galaxy Map",action: "Galaxy Cam Set Y-Axis to Z-Axis"}, //Auto-generated
	GalaxyMapHome: {area: "General Controls",category: "Galaxy Map",action: "Galaxy Cam Select Current System"}, //Auto-generated
	ToggleDriveAssist: {area: "SRV Controls",category: "Driving",action: "Drive Assist"}, //Auto-generated
	SteerLeftButton: {area: "SRV Controls",category: "Driving",action: "Steering Left Button"}, //Auto-generated
	SteerRightButton: {area: "SRV Controls",category: "Driving",action: "Steering Right Button"}, //Auto-generated
	BuggyRollLeftButton: {area: "SRV Controls",category: "Driving",action: "Roll Left Button"}, //Auto-generated
	BuggyRollRightButton: {area: "SRV Controls",category: "Driving",action: "Roll Right Button"}, //Auto-generated
	BuggyPitchUpButton: {area: "SRV Controls",category: "Driving",action: "Pitch Up Button"}, //Auto-generated
	BuggyPitchDownButton: {area: "SRV Controls",category: "Driving",action: "Pitch Down Button"}, //Auto-generated
	VerticalThrustersButton: {area: "SRV Controls",category: "Driving",action: "Verticle Thrusters"}, //Auto-generated
	BuggyPrimaryFireButton: {area: "SRV Controls",category: "Driving",action: "SRV Primary Fire"}, //Auto-generated
	BuggySecondaryFireButton: {area: "SRV Controls",category: "Driving",action: "SRV Secondary Fire"}, //Auto-generated
	AutoBreakBuggyButton: {area: "SRV Controls",category: "Driving",action: "Handbrake"}, //Auto-generated
	HeadlightsBuggyButton: {area: "SRV Controls",category: "Driving",action: "Headlights"}, //Auto-generated
	ToggleBuggyTurretButton: {area: "SRV Controls",category: "Driving",action: "Toggle SRV Turret"}, //Auto-generated
	BuggyCycleFireGroupNext: {area: "SRV Controls",category: "Driving",action: "Cycle Next Fire Group"}, //Auto-generated
	BuggyCycleFireGroupPrevious: {area: "SRV Controls",category: "Driving",action: "Cycle Previous Fire Group"}, //Auto-generated
	SelectTarget_Buggy: {area: "SRV Controls",category: "Driving Targeting",action: "Select Target Ahead"}, //Auto-generated
	BuggyTurretYawLeftButton: {area: "SRV Controls",category: "Driving Turret Controls",action: "SRV Turret Yaw Left"}, //Auto-generated
	BuggyTurretYawRightButton: {area: "SRV Controls",category: "Driving Turret Controls",action: "SRV Turret Yaw Right"}, //Auto-generated
	BuggyTurretPitchUpButton: {area: "SRV Controls",category: "Driving Turret Controls",action: "SRV Turret Pitch Up"}, //Auto-generated
	BuggyTurretPitchDownButton: {area: "SRV Controls",category: "Driving Turret Controls",action: "SRV Turret Pitch Down"}, //Auto-generated
	BuggyToggleReverseThrottleInput: {area: "SRV Controls",category: "Drive Throttle",action: "Forward Only Throttle Reverse"}, //Auto-generated
	IncreaseSpeedButtonMax: {area: "SRV Controls",category: "Drive Throttle",action: "Accelerate Button"}, //Auto-generated
	DecreaseSpeedButtonMax: {area: "SRV Controls",category: "Drive Throttle",action: "Decelerate Button"}, //Auto-generated
	IncreaseEnginesPower_Buggy: {area: "SRV Controls",category: "Driving Miscellaneous",action: "Divert Power to Engines"}, //Auto-generated
	IncreaseWeaponsPower_Buggy: {area: "SRV Controls",category: "Driving Miscellaneous",action: "Divert Power to Weapons"}, //Auto-generated
	IncreaseSystemsPower_Buggy: {area: "SRV Controls",category: "Driving Miscellaneous",action: "Divert Power to System"}, //Auto-generated
	ResetPowerDistribution_Buggy: {area: "SRV Controls",category: "Driving Miscellaneous",action: "Balance Power Distribution"}, //Auto-generated
	ToggleCargoScoop_Buggy: {area: "SRV Controls",category: "Driving Miscellaneous",action: "Cargo Scoop"}, //Auto-generated
	EjectAllCargo_Buggy: {area: "SRV Controls",category: "Driving Miscellaneous",action: "Jettison All Cargo"}, //Auto-generated
	RecallDismissShip: {area: "SRV Controls",category: "Driving Miscellaneous",action: "Recall/Dismiss Ship"}, //Auto-generated
	UIFocus_Buggy: {area: "SRV Controls",category: "Driving Mode Switches",action: "UI Focus"}, //Auto-generated
	FocusLeftPanel_Buggy: {area: "SRV Controls",category: "Driving Mode Switches",action: "External Panel"}, //Auto-generated
	FocusCommsPanel_Buggy: {area: "SRV Controls",category: "Driving Mode Switches",action: "Comms Panel"}, //Auto-generated
	QuickCommsPanel_Buggy: {area: "SRV Controls",category: "Driving Mode Switches",action: "Quick Comms"}, //Auto-generated
	FocusRadarPanel_Buggy: {area: "SRV Controls",category: "Driving Mode Switches",action: "Role Panel"}, //Auto-generated
	FocusRightPanel_Buggy: {area: "SRV Controls",category: "Driving Mode Switches",action: "Internal Panel"}, //Auto-generated
	GalaxyMapOpen_Buggy: {area: "SRV Controls",category: "Driving Mode Switches",action: "Open Galaxy Map"}, //Auto-generated
	SystemMapOpen_Buggy: {area: "SRV Controls",category: "Driving Mode Switches",action: "Open System Map"}, //Auto-generated
	OpenCodexGoToDiscovery_Buggy: {area: "SRV Controls",category: "Driving Mode Switches",action: "Open Discovery"}, //Auto-generated
	PlayerHUDModeToggle_Buggy: {area: "SRV Controls",category: "Driving Mode Switches",action: "Switch Cockpit Mode"}, //Auto-generated
	HeadLookToggle_Buggy: {area: "SRV Controls",category: "Driving Mode Switches",action: "Headlook"}, //Auto-generated
	MultiCrewToggleMode: {area: "Ship Controls",category: "Multi-crew",action: "Mode Toggle"}, //Auto-generated
	MultiCrewPrimaryFire: {area: "Ship Controls",category: "Multi-crew",action: "Primary Fire"}, //Auto-generated
	MultiCrewSecondaryFire: {area: "Ship Controls",category: "Multi-crew",action: "Secondary Fire"}, //Auto-generated
	MultiCrewPrimaryUtilityFire: {area: "Ship Controls",category: "Multi-crew",action: "Primary Utility Fire"}, //Auto-generated
	MultiCrewSecondaryUtilityFire: {area: "Ship Controls",category: "Multi-crew",action: "Secondary Utility Fire"}, //Auto-generated
	MultiCrewThirdPersonYawLeftButton: {area: "Ship Controls",category: "Multi-crew",action: "Third-Person Yaw Left"}, //Auto-generated
	MultiCrewThirdPersonYawRightButton: {area: "Ship Controls",category: "Multi-crew",action: "Third-Person Yaw Right"}, //Auto-generated
	MultiCrewThirdPersonPitchUpButton: {area: "Ship Controls",category: "Multi-crew",action: "Third-Person Pitch Up"}, //Auto-generated
	MultiCrewThirdPersonPitchDownButton: {area: "Ship Controls",category: "Multi-crew",action: "Third-Person Pitch Down"}, //Auto-generated
	MultiCrewThirdPersonFovOutButton: {area: "Ship Controls",category: "Multi-crew",action: "Third-Person Field of View Out"}, //Auto-generated
	MultiCrewThirdPersonFovInButton: {area: "Ship Controls",category: "Multi-crew",action: "Third-Person Field of View In"}, //Auto-generated
	MultiCrewCockpitUICycleForward: {area: "Ship Controls",category: "Multi-crew",action: "Cycle Cockpit UI Forwards"}, //Auto-generated
	MultiCrewCockpitUICycleBackward: {area: "Ship Controls",category: "Multi-crew",action: "Cycle Cockpit UI Backwards"}, //Auto-generated
	OrderRequestDock: {area: "Ship Controls",category: "Fighter Orders",action: "Recall Fighter"}, //Auto-generated
	OrderDefensiveBehaviour: {area: "Ship Controls",category: "Fighter Orders",action: "Defend"}, //Auto-generated
	OrderAggressiveBehaviour: {area: "Ship Controls",category: "Fighter Orders",action: "Engage at Will"}, //Auto-generated
	OrderFocusTarget: {area: "Ship Controls",category: "Fighter Orders",action: "Attack Target"}, //Auto-generated
	OrderHoldFire: {area: "Ship Controls",category: "Fighter Orders",action: "Maintain formation"}, //Auto-generated
	OrderHoldPosition: {area: "Ship Controls",category: "Fighter Orders",action: "Hold Position"}, //Auto-generated
	OrderFollow: {area: "Ship Controls",category: "Fighter Orders",action: "Follow Me"}, //Auto-generated
	OpenOrders: {area: "Ship Controls",category: "Fighter Orders",action: "Open Orders"}, //Auto-generated
	PhotoCameraToggle: {area: "General Controls",category: "Camera Suite",action: "Ship - Toggle Camera Suite"}, //Auto-generated
	PhotoCameraToggle_Buggy: {area: "General Controls",category: "Camera Suite",action: "SRV - Toggle Camera Suite"}, //Auto-generated
	PhotoCameraToggle_Humanoid: {area: "General Controls",category: "Camera Suite",action: "Command - Toggle Camera Suite"}, //Auto-generated
	VanityCameraScrollLeft: {area: "General Controls",category: "Camera Suite",action: "Previous Camera"}, //Auto-generated
	VanityCameraScrollRight: {area: "General Controls",category: "Camera Suite",action: "Next Camera"}, //Auto-generated
	ToggleFreeCam: {area: "General Controls",category: "Camera Suite",action: "Enter Free Camera"}, //Auto-generated
	VanityCameraOne: {area: "General Controls",category: "Camera Suite",action: "Camera - Cockpit Front"}, //Auto-generated
	VanityCameraTwo: {area: "General Controls",category: "Camera Suite",action: "Camera - Cockpit Back"}, //Auto-generated
	VanityCameraThree: {area: "General Controls",category: "Camera Suite",action: "Camera - CMDR 1"}, //Auto-generated
	VanityCameraFour: {area: "General Controls",category: "Camera Suite",action: "Camera - CMDR 2"}, //Auto-generated
	VanityCameraFive: {area: "General Controls",category: "Camera Suite",action: "Camera - Co-Pilot 1"}, //Auto-generated
	VanityCameraSix: {area: "General Controls",category: "Camera Suite",action: "Camera - Co-Pilot 2"}, //Auto-generated
	VanityCameraSeven: {area: "General Controls",category: "Camera Suite",action: "Camera - Front"}, //Auto-generated
	VanityCameraEight: {area: "General Controls",category: "Camera Suite",action: "Camera - Back"}, //Auto-generated
	VanityCameraNine: {area: "General Controls",category: "Camera Suite",action: "Camera - Low"}, //Auto-generated
	VanityCameraTen: {area: "General Controls",category: "...",action: "..."}, //Missing
	FreeCamToggleHUD: {area: "General Controls",category: "Free Camera",action: "Toggle HUD"}, //Auto-generated
	FreeCamSpeedInc: {area: "General Controls",category: "Free Camera",action: "Increase Speed"}, //Auto-generated
	FreeCamSpeedDec: {area: "General Controls",category: "Free Camera",action: "Decrease Speed"}, //Auto-generated
	ToggleReverseThrottleInputFreeCam: {area: "General Controls",category: "Free Camera",action: "Forward Only Throttle Reverse"}, //Auto-generated
	MoveFreeCamForward: {area: "General Controls",category: "Free Camera",action: "Move Forward"}, //Auto-generated
	MoveFreeCamBackwards: {area: "General Controls",category: "Free Camera",action: "Move Backward"}, //Auto-generated
	MoveFreeCamRight: {area: "General Controls",category: "Free Camera",action: "Move Right"}, //Auto-generated
	MoveFreeCamLeft: {area: "General Controls",category: "Free Camera",action: "Move Left"}, //Auto-generated
	MoveFreeCamUp: {area: "General Controls",category: "Free Camera",action: "Move Up"}, //Auto-generated
	MoveFreeCamDown: {area: "General Controls",category: "Free Camera",action: "Move Down"}, //Auto-generated
	PitchCameraUp: {area: "General Controls",category: "Free Camera",action: "Pitch Up"}, //Auto-generated
	PitchCameraDown: {area: "General Controls",category: "Free Camera",action: "Pitch Down"}, //Auto-generated
	YawCameraLeft: {area: "General Controls",category: "Free Camera",action: "Yaw Left"}, //Auto-generated
	YawCameraRight: {area: "General Controls",category: "Free Camera",action: "Yaw Right"}, //Auto-generated
	RollCameraLeft: {area: "General Controls",category: "Free Camera",action: "Roll Left"}, //Auto-generated
	RollCameraRight: {area: "General Controls",category: "Free Camera",action: "Roll Right"}, //Auto-generated
	ToggleRotationLock: {area: "General Controls",category: "Free Camera",action: "Stabiliser On/Off Toggle"}, //Auto-generated
	FixCameraRelativeToggle: {area: "General Controls",category: "Free Camera",action: "Camera / Ship Controls Toggle"}, //Auto-generated
	FixCameraWorldToggle: {area: "General Controls",category: "Free Camera",action: "Attach / Detach Camera"}, //Auto-generated
	QuitCamera: {area: "General Controls",category: "Free Camera",action: "Exit Free Camera"}, //Auto-generated
	ToggleAdvanceMode: {area: "General Controls",category: "Free Camera",action: "Zoom / Blur Toggle"}, //Auto-generated
	FreeCamZoomIn: {area: "General Controls",category: "Free Camera",action: "Increase Zoom/Focus"}, //Auto-generated
	FreeCamZoomOut: {area: "General Controls",category: "Free Camera",action: "Decrease Zoom/Focus"}, //Auto-generated
	FStopDec: {area: "General Controls",category: "Free Camera",action: "Decrease Blur"}, //Auto-generated
	FStopInc: {area: "General Controls",category: "Free Camera",action: "Increase Blur"}, //Auto-generated
	CommanderCreator_Undo: {area: "General Controls",category: "Holo-Me",action: "Undo"}, //Auto-generated
	CommanderCreator_Redo: {area: "General Controls",category: "Holo-Me",action: "Redo"}, //Auto-generated
	CommanderCreator_Rotation_MouseToggle: {area: "General Controls",category: "Holo-Me",action: "Toggle Mouse Rotation"}, //Auto-generated
	GalnetAudio_Play_Pause: {area: "General Controls",category: "Playlist",action: "Play / Pause"}, //Auto-generated
	GalnetAudio_SkipForward: {area: "General Controls",category: "Playlist",action: "Skip Forward"}, //Auto-generated
	GalnetAudio_SkipBackward: {area: "General Controls",category: "Playlist",action: "Skip Backward"}, //Auto-generated
	GalnetAudio_ClearQueue: {area: "General Controls",category: "Playlist",action: "Clear Queue"}, //Auto-generated
	ExplorationFSSCameraPitchIncreaseButton: {area: "Ship Controls",category: "Full Spectrum System Scanner",action: "Camera Pitch Increase"}, //Auto-generated
	ExplorationFSSCameraPitchDecreaseButton: {area: "Ship Controls",category: "Full Spectrum System Scanner",action: "Camera Pitch Decrease"}, //Auto-generated
	ExplorationFSSCameraYawIncreaseButton: {area: "Ship Controls",category: "Full Spectrum System Scanner",action: "Camera Yaw Increase"}, //Auto-generated
	ExplorationFSSCameraYawDecreaseButton: {area: "Ship Controls",category: "Full Spectrum System Scanner",action: "Camera Yaw Decrease"}, //Auto-generated
	ExplorationFSSZoomIn: {area: "Ship Controls",category: "Full Spectrum System Scanner",action: "Zoom in to Target"}, //Auto-generated
	ExplorationFSSZoomOut: {area: "Ship Controls",category: "Full Spectrum System Scanner",action: "Zoom Out"}, //Auto-generated
	ExplorationFSSMiniZoomIn: {area: "Ship Controls",category: "Full Spectrum System Scanner",action: "Stepped Zoom In"}, //Auto-generated
	ExplorationFSSMiniZoomOut: {area: "Ship Controls",category: "Full Spectrum System Scanner",action: "Stepped Zoom Out"}, //Auto-generated
	ExplorationFSSRadioTuningX_Increase: {area: "Ship Controls",category: "Full Spectrum System Scanner",action: "Tuning Right"}, //Auto-generated
	ExplorationFSSRadioTuningX_Decrease: {area: "Ship Controls",category: "Full Spectrum System Scanner",action: "Tuning Left"}, //Auto-generated
	ExplorationFSSDiscoveryScan: {area: "Ship Controls",category: "Full Spectrum System Scanner",action: "Discovery Scan"}, //Auto-generated
	ExplorationFSSQuit: {area: "Ship Controls",category: "Full Spectrum System Scanner",action: "Leave FSS"}, //Auto-generated
	ExplorationFSSTarget: {area: "Ship Controls",category: "Full Spectrum System Scanner",action: "Target Current Signal"}, //Auto-generated
	ExplorationFSSShowHelp: {area: "Ship Controls",category: "Full Spectrum System Scanner",action: "Show Help"}, //Auto-generated
	ExplorationSAAChangeScannedAreaViewToggle: {area: "Ship Controls",category: "Detailed Surface Scanner",action: "Toggle Front/Back View"}, //Auto-generated
	ExplorationSAAExitThirdPerson: {area: "Ship Controls",category: "Detailed Surface Scanner",action: "Exit Mode"}, //Auto-generated
	ExplorationSAANextGenus: {area: "Ship Controls",category: "Detailed Surface Scanner",action: "Next Filter"}, //Auto-generated
	ExplorationSAAPreviousGenus: {area: "Ship Controls",category: "Detailed Surface Scanner",action: "Previous Filter"}, //Auto-generated
	SAAThirdPersonYawLeftButton: {area: "Ship Controls",category: "Detailed Surface Scanner",action: "Third-Person Yaw Left"}, //Auto-generated
	SAAThirdPersonYawRightButton: {area: "Ship Controls",category: "Detailed Surface Scanner",action: "Third-Person Yaw Right"}, //Auto-generated
	SAAThirdPersonPitchUpButton: {area: "Ship Controls",category: "Detailed Surface Scanner",action: "Third-Person Pitch Up"}, //Auto-generated
	SAAThirdPersonPitchDownButton: {area: "Ship Controls",category: "Detailed Surface Scanner",action: "Third-Person Pitch Down"}, //Auto-generated
	SAAThirdPersonFovOutButton: {area: "Ship Controls",category: "Detailed Surface Scanner",action: "Third-Person Field of View Out"}, //Auto-generated
	SAAThirdPersonFovInButton: {area: "Ship Controls",category: "Detailed Surface Scanner",action: "Third-Person Field of View In"}, //Auto-generated
	HumanoidForwardButton: {area: "On Foot Controls",category: "On Foot",action: "Move Forward"}, //Auto-generated
	HumanoidBackwardButton: {area: "On Foot Controls",category: "On Foot",action: "Move Backward"}, //Auto-generated
	HumanoidStrafeLeftButton: {area: "On Foot Controls",category: "On Foot",action: "Strafe Left"}, //Auto-generated
	HumanoidStrafeRightButton: {area: "On Foot Controls",category: "On Foot",action: "Strafe Right"}, //Auto-generated
	HumanoidRotateLeftButton: {area: "On Foot Controls",category: "On Foot",action: "Turn Left"}, //Auto-generated
	HumanoidRotateRightButton: {area: "On Foot Controls",category: "On Foot",action: "Turn Right"}, //Auto-generated
	HumanoidPitchUpButton: {area: "On Foot Controls",category: "On Foot",action: "Look Up"}, //Auto-generated
	HumanoidPitchDownButton: {area: "On Foot Controls",category: "On Foot",action: "Look Down"}, //Auto-generated
	HumanoidSprintButton: {area: "On Foot Controls",category: "On Foot",action: "Sprint"}, //Auto-generated
	HumanoidWalkButton: {area: "On Foot Controls",category: "On Foot",action: "Walk"}, //Auto-generated
	HumanoidCrouchButton: {area: "On Foot Controls",category: "On Foot",action: "Crouch"}, //Auto-generated
	HumanoidJumpButton: {area: "On Foot Controls",category: "On Foot",action: "Jump"}, //Auto-generated
	HumanoidPrimaryInteractButton: {area: "On Foot Controls",category: "On Foot",action: "Interact"}, //Auto-generated
	HumanoidSecondaryInteractButton: {area: "On Foot Controls",category: "On Foot",action: "Secondary Interact"}, //Auto-generated
	HumanoidItemWheelButton: {area: "On Foot Controls",category: "On Foot",action: "Open Item Wheel"}, //Auto-generated
	HumanoidEmoteWheelButton: {area: "On Foot Controls",category: "...",action: "..."}, //Missing
	HumanoidUtilityWheelCycleMode: {area: "On Foot Controls",category: "...",action: "..."}, //Missing
	HumanoidItemWheelButton_XLeft: {area: "On Foot Controls",category: "On Foot",action: "Item Wheel Left"}, //Auto-generated
	HumanoidItemWheelButton_XRight: {area: "On Foot Controls",category: "On Foot",action: "Item Wheel Right"}, //Auto-generated
	HumanoidItemWheelButton_YUp: {area: "On Foot Controls",category: "On Foot",action: "Item Wheel Up"}, //Auto-generated
	HumanoidItemWheelButton_YDown: {area: "On Foot Controls",category: "On Foot",action: "Item Wheel Down"}, //Auto-generated
	HumanoidPrimaryFireButton: {area: "On Foot Controls",category: "On Foot",action: "Fire Weapon/Use Tool"}, //Auto-generated
	HumanoidZoomButton: {area: "On Foot Controls",category: "On Foot",action: "Aim Down Sights"}, //Auto-generated
	HumanoidThrowGrenadeButton: {area: "On Foot Controls",category: "On Foot",action: "Throw Grenade"}, //Auto-generated
	HumanoidMeleeButton: {area: "On Foot Controls",category: "On Foot",action: "Melee Attack"}, //Auto-generated
	HumanoidReloadButton: {area: "On Foot Controls",category: "On Foot",action: "Reload"}, //Auto-generated
	HumanoidSwitchWeapon: {area: "On Foot Controls",category: "On Foot",action: "Switch Weapon"}, //Auto-generated
	HumanoidSelectPrimaryWeaponButton: {area: "On Foot Controls",category: "On Foot",action: "Select Primary Weapon"}, //Auto-generated
	HumanoidSelectSecondaryWeaponButton: {area: "On Foot Controls",category: "On Foot",action: "Select Secondary Weapon"}, //Auto-generated
	HumanoidSelectUtilityWeaponButton: {area: "On Foot Controls",category: "On Foot",action: "Select Tool"}, //Auto-generated
	HumanoidSelectNextWeaponButton: {area: "On Foot Controls",category: "On Foot",action: "Select Next Weapon"}, //Auto-generated
	HumanoidSelectPreviousWeaponButton: {area: "On Foot Controls",category: "On Foot",action: "Select Previous Weapon"}, //Auto-generated
	HumanoidHideWeaponButton: {area: "On Foot Controls",category: "On Foot",action: "Holster Weapon"}, //Auto-generated
	HumanoidSelectNextGrenadeTypeButton: {area: "On Foot Controls",category: "On Foot",action: "Select Next Grenade Type"}, //Auto-generated
	HumanoidSelectPreviousGrenadeTypeButton: {area: "On Foot Controls",category: "On Foot",action: "Select Previous Grenade Type"}, //Auto-generated
	HumanoidToggleFlashlightButton: {area: "On Foot Controls",category: "On Foot",action: "Toggle Flashlight"}, //Auto-generated
	HumanoidToggleNightVisionButton: {area: "On Foot Controls",category: "On Foot",action: "Toggle Night Vision"}, //Auto-generated
	HumanoidToggleShieldsButton: {area: "On Foot Controls",category: "On Foot",action: "Toggle Shields"}, //Auto-generated
	HumanoidClearAuthorityLevel: {area: "On Foot Controls",category: "On Foot",action: "Clear Authority Level"}, //Auto-generated
	HumanoidHealthPack: {area: "On Foot Controls",category: "On Foot",action: "Use Health Pack"}, //Auto-generated
	HumanoidBattery: {area: "On Foot Controls",category: "On Foot",action: "Use Energy Cell"}, //Auto-generated
	HumanoidSelectFragGrenade: {area: "On Foot Controls",category: "On Foot",action: "Select Frag Grenade"}, //Auto-generated
	HumanoidSelectEMPGrenade: {area: "On Foot Controls",category: "On Foot",action: "Select EMP Grenade"}, //Auto-generated
	HumanoidSelectShieldGrenade: {area: "On Foot Controls",category: "On Foot",action: "Select Shield Grenade"}, //Auto-generated
	HumanoidSwitchToRechargeTool: {area: "On Foot Controls",category: "On Foot",action: "Select Energylink"}, //Auto-generated
	HumanoidSwitchToCompAnalyser: {area: "On Foot Controls",category: "On Foot",action: "Select Profile Analyser"}, //Auto-generated
	HumanoidSwitchToSuitTool: {area: "On Foot Controls",category: "On Foot",action: "Select Suit Specific Tool"}, //Auto-generated
	HumanoidToggleToolModeButton: {area: "On Foot Controls",category: "On Foot",action: "Toggle Tool Mode"}, //Auto-generated
	HumanoidToggleMissionHelpPanelButton: {area: "On Foot Controls",category: "On Foot",action: "Toggle Help"}, //Auto-generated
	HumanoidPing: {area: "On Foot Controls",category: "...",action: "..."}, //Missing
	GalaxyMapOpen_Humanoid: {area: "On Foot Controls",category: "On Foot Mode Switches",action: "Open Galaxy Map"}, //Auto-generated
	SystemMapOpen_Humanoid: {area: "On Foot Controls",category: "On Foot Mode Switches",action: "Open System Map"}, //Auto-generated
	FocusCommsPanel_Humanoid: {area: "On Foot Controls",category: "On Foot Mode Switches",action: "Comms Panel"}, //Auto-generated
	QuickCommsPanel_Humanoid: {area: "On Foot Controls",category: "On Foot Mode Switches",action: "Quick Comms"}, //Auto-generated
	HumanoidOpenAccessPanelButton: {area: "On Foot Controls",category: "On Foot Mode Switches",action: "Open Insight Hub"}, //Auto-generated
	HumanoidConflictContextualUIButton: {area: "On Foot Controls",category: "On Foot Mode Switches",action: "Open Conflict Zone Battle Stats"}, //Auto-generated
	StoreEnableRotation: {area: "General Controls",category: "Store Camera",action: "Hold to Rotate"}, //Auto-generated
	StoreCamZoomIn: {area: "General Controls",category: "Store Camera",action: "Store Camera Zoom In"}, //Auto-generated
	StoreCamZoomOut: {area: "General Controls",category: "Store Camera",action: "Store Camera Zoom Out"}, //Auto-generated
	StoreToggle: {area: "General Controls",category: "Store Camera",action: "Store Toggle"}, //Auto-generated
	HumanoidEmoteSlot1: {area: "On Foot Controls",category: "...",action: "..."}, //Missing
	HumanoidEmoteSlot2: {area: "On Foot Controls",category: "...",action: "..."}, //Missing
	HumanoidEmoteSlot3: {area: "On Foot Controls",category: "...",action: "..."}, //Missing
	HumanoidEmoteSlot4: {area: "On Foot Controls",category: "...",action: "..."}, //Missing
	HumanoidEmoteSlot5: {area: "On Foot Controls",category: "...",action: "..."}, //Missing
	HumanoidEmoteSlot6: {area: "On Foot Controls",category: "...",action: "..."}, //Missing
	HumanoidEmoteSlot7: {area: "On Foot Controls",category: "...",action: "..."}, //Missing
	HumanoidEmoteSlot8: {area: "On Foot Controls",category: "...",action: "..."} //Missing
};