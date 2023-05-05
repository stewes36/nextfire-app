import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Link href="/stephen2s">
                <a>Stephen's profile</a>
            </Link>
        </div>
    );
}
