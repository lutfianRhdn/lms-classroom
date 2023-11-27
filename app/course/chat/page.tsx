import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import fetchApi from "@/utils/fetchApi";

export default function Home() {
    const checkApi = async () => {
        const tes = await fetchApi('/course/chat', 'POST')
    };
    checkApi()
	return (
        <h1>aksoasoks</h1>
	);
}
