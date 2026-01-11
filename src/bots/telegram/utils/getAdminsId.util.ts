import { DevSpaceGroupId } from "../../../constants";
import { bot } from "../bot";

export const getAdminsId = async () =>
  (await bot.telegram.getChatAdministrators(DevSpaceGroupId)).map(
    (admin) => admin.user.id
  );
