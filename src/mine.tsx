//import { createContext, useContext, ParentComponent } from "solid-js";
import { createSignal } from "solid-js";
import { createStore, SetStoreFunction } from "solid-js/store";

type color = "red" | "blue" | "green";
type store = { 
    count: number; 
    style: { color: color } 
};

export const globalStore = () => {
    const initStore: store = {
        count: 0,
        style : {color: "red"},
    }
    const [state, setState] = createStore(initStore);
    return {state, setState};
};

const colorArrays = ["red", "blue", "green", "brown", "yellow", "orange", "purple", "pink"];

export const useSignal = () => {
    let ran = Math.floor(Math.random() * 8);
    const [color, setColor] = createSignal(colorArrays[ran]);
    return {color, setColor};
}


export const {state, setState} = globalStore();
export const {color, setColor} = useSignal();

export default function Mine() {

    
    
    return (
        <div>
        <h1 style = {state.style}>Count: {state.count}</h1>
        <button 
            style = {{"background-color": color()}}
            onClick={
                () => {
                    let ran = Math.floor(Math.random() * 8);
                    setState("count", state.count + 1);
                    setColor(colorArrays[ran])
                    console.log(color())
                }
            }>
                Increment
        </button>
        </div>
    );
}
