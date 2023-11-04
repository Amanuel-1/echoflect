import React from "react";
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { siteconfig } from "@/lib/siteconfig";

// export const config = {
//   runtime: "experimental-edge",
// };

export async function GET(req:NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // dynamic params
    const title = searchParams.has("title")
      ? searchParams.get("title")?.slice(0, 100)
      : "untitled";
    const website = siteconfig.name;
    const author = searchParams.get("author") || "someone anonymous";
    const image = searchParams.get("image") || "";

    return new ImageResponse(
      (
        <div tw="h-full w-full flex items-start justify-start">
          <div tw="flex items-start justify-start h-full">
            <div tw="flex w-2/5 flex-col justify-between h-full pl-12 py-12 bg-gray-50">
              <div tw="flex flex-col">
                <p tw="text-2xl font-bold mb-0 text-green-600">{website}</p>
                <h1 tw="text-5xl font-black text-left">{title}</h1>
              </div>
              <p tw="text-3xl font-bold bg-green-800 text-green-100 py-4 px-12 rounded-lg">
                {author}
              </p>
            </div>
            {image ? (
              <div tw="flex w-3/5 h-full">
                <img
                  tw="w-full h-full"
                  style={{ objectFit: "cover" }}
                  src={image}
                />
              </div>
            ) : null}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 627,
      }
    );
  } catch (e:any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}



// const title = "Very nice Nike shoes - 2022 edition";
// const image =
//   "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eca7ef50-a733-4ee0-9317-cb6001b7031d/jordan-air-200e-shoes-4JJb1D.png";
// const website = "nike.com";
// const price = "$49.99";

// return new ImageResponse(
//   <img
//     src={`/api/og/e-commerce?title=${title}&website=${website}&price=${price}&image=${image}`}
//   />
// );

// or

// return (
//   <meta
//     property="og:image"
//     content={`www.yourdomain.com/api/og/e-commerce?title=${title}&website=${website}&price=${price}&image=${image}`}
//   />


// );

