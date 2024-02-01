import Link from "next/link";

function page() {
    return (
        <div>
            Back To Admin Page  <Link href={"/dashboard"}>Admin</Link>
        </div>
    );
}

export default page;