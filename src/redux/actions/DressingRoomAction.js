import { CHANGE_OUTFIT } from "../types/DressingRoomType";

export const changeOutFitAction = (id) => ({
  type: CHANGE_OUTFIT,
  id,
});
