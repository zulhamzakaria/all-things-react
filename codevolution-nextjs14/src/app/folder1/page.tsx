import Link from "next/link";

export default function FolderOnePage() {
  return (
    <div>
      <h1>Folder One Page</h1>
      <Link href="/folder1/folder2">Folder Two</Link>
    </div>
  );
}
