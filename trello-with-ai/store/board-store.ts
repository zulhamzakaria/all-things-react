import { create } from "zustand";

interface BoardState {
  board: number;
  getBoard:()=>void
}

const useBoardStore = create<BoardState>((set)=>({
    board:0,
    getBoard: ()=>{
        
    }
}))