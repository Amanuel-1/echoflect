
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";



import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}


export function constructMetadata({
    title = "Echoflect - your creative works to reach every corner of the world",
    description = " A place where you can reflex your ideas and literature works to the rest of the world.",
    image = "https://loglib.io/og.png",
}: {
    title?: string;
    description?: string;
    image?: string;
}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@loglib_io",
        },
        icons: "/favicon.ico",
        metadataBase: new URL("https://loglib.io"),
        themeColor: "#000",
    };
}



