import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const userPrompts = await Prompt.find({ creator: params.id }).populate(
      'creator'
    );

    return new Response(JSON.stringify(userPrompts), { status: 200 });
  } catch (err) {
    return new Response('Failed to fetch user prompts', { status: 500 });
  }
};
