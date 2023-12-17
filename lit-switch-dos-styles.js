import { css } from "lit";

export const LitSwitchDosStyles = css`
 :host {
    --color__red--100: #ff8da3;
    --color__red--200: #fe718e;
    --color__red--300: #fd566c;
    --color__red--400: #fc273f;
    --color__red--500: #d31b3d;
    --color__red--600: #aa1834;
    --color__red--800: #641432; 
    --color__blue--100: #acc2dd;
    --color__blue--500: #42638c;
    --color__blue--600: #2e4869;
    --color__blue--650: #042b43;
    --color__blue--680: #04273c;
    --color__blue--700: #172f48;
    --color__blue--800: #031f30;
    --color__blue--900: #011523;
    --color__purple--100: #c2b4fc;
    --color__purple--400: #8d5fff;
    --color__purple--600: #55419e;
    --color__purple--800: #26224c;
    --color__white: #fff;
    --color__grey--input: #f3f3f3;
    --color__grey--100: #f7f7f7;
    --color__grey--200: #f8f8f8;
    --color__grey--300: #e5e5e5;
    --color__grey--400: #d7d8d6;
    --color__grey--500: #babcbc;
    --color__grey--600: #9c9ea0;
    --color__grey--800: #53565a;
    --color__success: #8dbf3d;
    --color__warning: #f6c348;
    --color__danger: #fc273f;
    font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  }
    .toggle {
      --width: 80px;
      --height: calc(var(--width) / 3);
 
      position: relative;
      display: inline-block;
      width: var(--width);
      height: var(--height);
      border-radius: var(--height);
      cursor: pointer;
    }
 
    .toggle input {
      display: none;
    }
 
    .toggle .slider {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: var(--height);
      background-color: var(--color__grey--300);
      transition: all .15s ease-in-out;
    }
 
    .toggle .slider::before {
      content: "";
      position: absolute;
      top: 3px;
      left: 5px;
      width: calc(var(--width) / 4);
      height: calc(var(--width) / 4);
      border-radius: calc(var(--height) / 2);
      background-color: var(--color__white);
      transition: all .15s ease-in-out;
    }
 
    .toggle input:checked+.slider {
      background-color: var(--color__blue--680);
    }
 
    .toggle input:checked+.slider::before {
      transform: translateX(calc(var(--width) - var(--height) - 2px));
    }
 
    .toggle .labels {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: 16px;
      transition: all .15s ease-in-out;
    }
 
    .toggle .labels::after {
      content: attr(data-off);
      position: absolute;
      top: 4px;
      right: 8px;
      color: var(--color__grey--600);
      opacity: 1;
      transition: all .15s ease-in-out;
    }
 
    .toggle .labels::before {
      content: attr(data-on);
      position: absolute;
      top: 4px;
      left: 8px;
      color: var(--color__white);
      opacity: 0;
      transition: all .15s ease-in-out;
    }
 
    .toggle input:checked~.labels::after {
      opacity: 0;
    }
 
    .toggle input:checked~.labels::before {
      opacity: 1;
    }
   `;