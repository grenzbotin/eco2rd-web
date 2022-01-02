import { forwardRef, RefObject, useState } from "react";
import { useRouter } from "next/router";
import { Navbar as BulmaNavbar } from "react-bulma-components";
import { RenderAsComponent } from "react-bulma-components/src/components";
import Link from "next/link";

const CustomItem = forwardRef<
  RefObject<RenderAsComponent> | undefined,
  { children: string; active: boolean }
>((props, ref) => {
  // @ts-ignore: To be solved - ref declaration with forwardRef
  return <BulmaNavbar.Item {...props} domRef={ref} />;
});

CustomItem.displayName = "CustomItem";

function Navbar(): React.ReactElement {
  const { pathname } = useRouter();
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

  return (
    <BulmaNavbar role="none" fixed="top" active={burgerOpen} color="primary">
      <BulmaNavbar.Brand>
        <BulmaNavbar.Item href="/" className="horizontalPadding">
          <img
            src="./logo_word_mark.svg"
            width="85"
            height="45"
            alt="eco₂rd word image mark"
          />
        </BulmaNavbar.Item>
        <BulmaNavbar.Burger onClick={() => setBurgerOpen(!burgerOpen)} />
      </BulmaNavbar.Brand>
      <BulmaNavbar.Menu>
        <BulmaNavbar.Container>
          <Link href="/releases" passHref={true}>
            <CustomItem active={pathname === "/releases"}>Releases</CustomItem>
          </Link>
          <Link href="/credits" passHref={true}>
            <CustomItem active={pathname === "/credits"}>Credits</CustomItem>
          </Link>
        </BulmaNavbar.Container>
      </BulmaNavbar.Menu>
    </BulmaNavbar>
  );
}

export default Navbar;
