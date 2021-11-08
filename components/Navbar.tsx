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
    <BulmaNavbar fixed="top" active={burgerOpen} color="primary">
      <BulmaNavbar.Brand>
        <BulmaNavbar.Item href="/" className="horizontalPadding">
          <img src="./logo_word_mark.svg" alt="eco₂rd Logo" />
        </BulmaNavbar.Item>
        <BulmaNavbar.Burger onClick={() => setBurgerOpen(!burgerOpen)} />
      </BulmaNavbar.Brand>
      <BulmaNavbar.Menu>
        <BulmaNavbar.Container>
          <Link href="/credits" passHref={true}>
            <CustomItem active={pathname === "/credits"}>Credits</CustomItem>
          </Link>
        </BulmaNavbar.Container>
      </BulmaNavbar.Menu>
    </BulmaNavbar>
  );
}

export default Navbar;
