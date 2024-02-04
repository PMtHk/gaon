import { WebClient } from "@slack/web-api";

const { SLACK_BOT_TOKEN, SLACK_CHANNEL_ID } = process.env;

if (SLACK_BOT_TOKEN === undefined)
  throw new Error("slackBotToken is not defined");
if (SLACK_CHANNEL_ID === undefined)
  throw new Error("slackChannelId is not defined");

const slackBot = new WebClient(SLACK_BOT_TOKEN);

export const sendMessage = async (blocks: any) => {
  try {
    const result = await slackBot.chat.postMessage({
      channel: SLACK_CHANNEL_ID,
      blocks: blocks,
      text: blocks[0].text.text,
    });

    const { ok } = result;

    return {
      ok,
    };
  } catch (error: any) {
    console.error("[Slack] sendMessage error: ", error);
    return {
      ok: false,
      error: error.message,
    };
  }
};
