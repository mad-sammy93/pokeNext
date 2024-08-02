"use client"
import Logo from "@/app/components/Header/Logo";
import Menu from "@/app/components/Header/Menu";

export default function Header(props: { name: string }) {
  const name = props.name

  return (
    <header>
      {name}
      <Logo />
      <div>Header Item</div>
      <Menu />
    </header>
  );
}