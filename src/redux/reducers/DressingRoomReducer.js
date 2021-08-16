import { CHANGE_OUTFIT } from "../types/DressingRoomType";
import { tabPanes } from "../../Data/Data.json";

const outfitList = tabPanes;
const initialState = {
  outfit: {
    hairstyle: "../assets/hairstyle/hairstyle3.png",
    necklaces: "../assets/necklaces/necklace3.png",
    topclothes: "../assets/clothes/topcloth5.png",
    botclothes: "../assets/clothes/botcloth4.png",
    handbags: "../assets/handbags/handbag2.png",
    shoes: "../assets/shoes/shoes2.png",
    background: "../assets/background/background1.jpg",
  },
};

const DressingRoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_OUTFIT: {
      let newOutFit = outfitList.find((item) => item.id === action.id);
      state.outfit = {
        ...state.outfit,
        [newOutFit.type]: newOutFit.imgSrc_png,
      };
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default DressingRoomReducer;
