import Link from "next/link";

async function Page() {
    return (
        <div>
            Admin Page
            <Link href={"/dashboard/admin4"}>Admin4</Link>
        </div>
    );
}

export default Page;