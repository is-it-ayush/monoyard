import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

export default function () {
  return new ImageResponse(
    (
      <div tw="flex flex-col bg-white h-full w-full justify-center items-start p-10">
        <div tw="text-white font-medium p-3 text-[65px] flex flex-col flex-wrap border-2 border-black bg-black">
          <div>Huh! Components?</div>
        </div>
        <div tw="flex flex-row justify-center items-center">
          <div tw="flex mt-2 pr-2">By Ayush</div>
          <div tw="flex">|</div>
          <div tw="flex pl-2 text-gray-700 mt-2">github.com/is-it-ayush</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
