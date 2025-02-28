import Link from 'next/link';
import Sidebar from '../Sidebar';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Logo, Button } from "../Typography";
import { usePathname } from "next/navigation";

const Index = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);

  const navItems = [
    { name: 'Services', link: '/services'},
    { name: 'Industries', link: "/industries"  },
    { name: 'Products', link: "/products"  },
    { name: 'Automations', link: "/automations"  },
    { name: 'Integrations', link: "/integrations"  },
    { name: 'About Us', link: '/about-us' },
  ];

  const ScrollToSection = (id) => {
    if (router.pathname == '/') {
      const section = document.getElementById(id);
      if (section) {
        // Calculate the offset (e.g., height of the fixed navbar)
        const headerHeight = document.querySelector("nav")?.offsetHeight || 0;
    
        window.scrollTo({
          top: section.offsetTop - headerHeight, // Offset scroll position
          behavior: "smooth",
        });
      }
    } else {
      router.push('/');
    }
  };

  return (
    <>
    <nav
      className="sticky top-0 z-50 bg-theme transition-all duration-300 py-5 lg:py-7 shadow-md"
    >
        <div className="container mx-auto px-20 md:px-24 lg:px-32">
          <div className="flex items-center justify-between gap-20">
            <Link href={'/'}>
              <img className="h-26 md:h-28" src="/assets/svg/logo-nav.svg" alt="Logo" />
            </Link>
            <ul className="hidden lg:flex items-center gap-20 md:gap-28 ml-auto">
              {navItems?.map((item, index) => (
                <li
                  key={index}
                  className={`${pathname === item?.link && '!text-[#E95018]'} nav-link text-2xs md:text-base text-white font-normal transition-all cursor-pointer hover:text-[#E95018]`}
                >
                  <Link className='whitespace-nowrap' href={item?.link}>{item?.name}</Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center">
              <Link href='/lets-talk'>
                <span className="inline-block xs:hidden text-2xs text-white font-medium transition-all cursor-pointer hover:text-[#E95018] mr-6">
                  Get Started
                </span>
              </Link>
              <Link href='/lets-talk'>
                <Button
                  arrow={false}
                  className="hidden xs:block !h-40 lg:!h-60 md:!text-base ml-16 mr-6 px-26 md:px-36">
                  Get Started
                </Button>
              </Link>
              <div
                onClick={() => setToggle(!toggle)}
                className="bg-white text-[#E95018] transition-all hover:bg-[#E95018] hover:text-white grid lg:hidden place-content-center w-36 h-36 rounded-0 cursor-pointer"
              >
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="18" height="2" rx="1" fill="currentColor" />
                  <rect y="4" width="18" height="2" rx="1" fill="currentColor" />
                  <rect y="8" width="18" height="2" rx="1" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Sidebar toggle={toggle} navItems={navItems} setToggle={setToggle} />
    </>
  );
};

export default Index;