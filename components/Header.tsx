import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ds/ButtonComponent";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <header className="flex justify-between px-6 py-4 items-center">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Logo />
        </Link>
        <Button
          className="min-h-10"
          variant="outline"
          onClick={() => router.push("/utilities")}
        >
          Dev Utilities
        </Button>
      </div>

      <div className="flex gap-3">
        <ThemeToggle />
        <Button
          className="min-h-10 hidden sm:flex"
          variant="outline"
          onClick={() => window.open("https://jam.dev", "_blank")}
        >
          <span className="mr-2">Try Jam</span>
          <Favicon />
        </Button>
      </div>
    </header>
  );
}

const Logo = () => {
  return (
    <svg
      width="56"
      height="24"
      viewBox="0 0 56 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.2238 18.9339C27.6646 18.5096 27.0886 18.0706 25.5914 17.6694C24.0942 17.2683 23.371 17.3592 22.6794 17.4482C22.4813 17.4728 22.2784 17.4961 22.0622 17.5106C21.386 17.9868 20.9228 18.7686 20.8236 19.622C20.7657 20.1086 21.0817 20.5711 21.5599 20.6992C21.6081 20.7122 21.6577 20.7203 21.7122 20.7297C22.2194 20.788 22.6391 20.7089 22.971 20.5908C23.0457 21.1233 23.2885 21.7629 23.9504 22.287C24.0569 22.3725 24.176 22.4303 24.3112 22.4666C24.4464 22.5028 24.5785 22.5123 24.7134 22.4915C25.5474 22.3733 26.0787 21.936 26.4097 21.5122C26.6381 21.7804 26.9634 22.0539 27.4304 22.2619C27.4761 22.2845 27.5244 22.2974 27.5776 22.3117C28.0557 22.4398 28.5607 22.1972 28.7538 21.7469C29.0897 20.9569 29.0844 20.0496 28.7368 19.2991C28.5472 19.1758 28.388 19.0555 28.2238 18.9339Z"
        fill="#73E5BF"
      />
      <path
        d="M50.5 18.9C49.505 18.9 48.93 18.665 48.37 18.44C47.72 18.175 47.05 17.9 45.5 17.9C43.95 17.9 43.275 18.175 42.63 18.44C42.075 18.665 41.5 18.9 40.5 18.9C39.365 18.9 38.49 18.6 37.895 18.005C37.3 17.41 37 16.535 37 15.4C37 15.365 37.005 12.075 37.505 8.82502C38.215 4.23002 39.555 1.90002 41.5 1.90002C42.705 1.90002 43.345 2.53502 43.855 3.04502C44.33 3.52502 44.705 3.90002 45.5 3.90002C46.295 3.90002 46.67 3.52502 47.145 3.04502C47.655 2.53502 48.295 1.90002 49.5 1.90002C51.445 1.90002 52.785 4.23002 53.495 8.82502C53.995 12.075 54 15.37 54 15.4C54 16.535 53.7 17.41 53.105 18.005C52.51 18.6 51.635 18.9 50.5 18.9Z"
        fill="#FF4070"
      />
      <path
        d="M30.1401 19.9148C29.179 19.6573 28.6844 19.2815 28.2017 18.9192C27.6424 18.495 27.0664 18.0559 25.5693 17.6548C24.0721 17.2536 23.3489 17.3445 22.6573 17.4336C22.063 17.5073 21.4467 17.5854 20.4808 17.3266C19.3845 17.0328 18.617 16.5166 18.1962 15.7879C17.7755 15.0592 17.7122 14.1363 18.0059 13.04C18.7708 10.1857 20.5703 7.17898 22.819 5.007C25.2145 2.69316 27.7254 1.66809 29.7104 2.19996C31.6953 2.73183 33.3573 4.875 34.2749 8.07659C35.1351 11.0868 35.1915 14.5856 34.4267 17.4399C34.1329 18.5362 33.6167 19.3038 32.888 19.7245C32.1592 20.1452 31.2364 20.2086 30.1401 19.9148Z"
        fill="#FF4070"
      />
      <path
        d="M9.5 18.9C7.83 18.9 6.13 18.34 4.825 17.36C3.325 16.24 2.5 14.655 2.5 12.9C2.5 11.515 3.285 9.90002 5.5 9.90002C6.72 9.90002 7 9.62002 7 8.40002V6.40002C7 3.12002 8.22 1.90002 11.5 1.90002C14.78 1.90002 16 3.12002 16 6.40002V12.4C16 14.53 15.445 16.16 14.355 17.255C13.26 18.345 11.63 18.9 9.5 18.9Z"
        fill="#FF4070"
      />
      <path
        d="M24.6325 10.7921C24.391 10.7274 23.9081 10.598 23.5846 11.8054C23.261 13.0128 23.744 13.1422 23.9855 13.2069C24.227 13.2716 24.7099 13.401 25.0334 12.1936C25.357 10.9862 24.874 10.8568 24.6325 10.7921Z"
        fill="#2A3632"
      />
      <path
        d="M28.9792 11.9568C28.7377 11.8921 28.2547 11.7626 27.9312 12.97C27.6077 14.1775 28.0907 14.3069 28.3321 14.3716C28.5736 14.4363 29.0566 14.5657 29.3801 13.3583C29.7036 12.1509 29.2207 12.0215 28.9792 11.9568Z"
        fill="#2A3632"
      />
      <path
        d="M27.8411 7.51071C27.5997 7.44601 27.1167 7.3166 26.7932 8.524C26.4696 9.73141 26.9526 9.86082 27.1941 9.92552C27.4356 9.99023 27.9185 10.1196 28.2421 8.91223C28.5656 7.70482 28.0826 7.57541 27.8411 7.51071Z"
        fill="#2A3632"
      />
      <path
        d="M49.5 2.40002C53.5 2.40002 53.5 15.4 53.5 15.4C53.5 17.4 52.5 18.4 50.5 18.4C48.5 18.4 48.5 17.4 45.5 17.4C42.5 17.4 42.5 18.4 40.5 18.4C38.5 18.4 37.5 17.4 37.5 15.4C37.5 15.4 37.5 2.40002 41.5 2.40002C43.5 2.40002 43.5 4.40002 45.5 4.40002C47.5 4.40002 47.5 2.40002 49.5 2.40002ZM49.5 1.40002C48.085 1.40002 47.34 2.14502 46.795 2.69502C46.305 3.18502 46.06 3.40002 45.5 3.40002C44.94 3.40002 44.695 3.18502 44.205 2.69502C43.66 2.14502 42.915 1.40002 41.5 1.40002C40.76 1.40002 40.09 1.68002 39.5 2.22502C39.035 2.65502 38.635 3.24002 38.28 4.01002C37.745 5.17502 37.315 6.76502 37.01 8.74502C36.505 12.035 36.5 15.265 36.5 15.4C36.5 16.67 36.85 17.665 37.545 18.355C38.235 19.05 39.23 19.4 40.5 19.4C41.595 19.4 42.245 19.135 42.815 18.9C43.445 18.64 44.045 18.4 45.5 18.4C46.955 18.4 47.55 18.645 48.185 18.9C48.76 19.135 49.405 19.4 50.5 19.4C51.77 19.4 52.765 19.05 53.455 18.355C54.145 17.665 54.5 16.67 54.5 15.4C54.5 15.265 54.495 12.035 53.99 8.75002C53.685 6.77002 53.26 5.17502 52.72 4.01502C52.365 3.24502 51.965 2.66002 51.5 2.23002C50.91 1.68002 50.24 1.40002 49.5 1.40002Z"
        fill="#2A3632"
      />
      <path
        d="M35.4653 12.7589C35.4309 11.1295 35.1845 9.4795 34.7595 7.99388C34.3185 6.45221 33.6841 5.09163 32.9217 4.05395C32.0322 2.85282 30.996 2.08342 29.8418 1.77413C28.6875 1.46485 27.4054 1.61308 26.0394 2.20986C24.8603 2.72732 23.6306 3.58838 22.4778 4.703C21.367 5.77709 20.3286 7.08284 19.4841 8.47675C18.5973 9.93181 17.9223 11.485 17.525 12.9677C17.1963 14.1944 17.2768 15.2461 17.7696 16.0925C18.2562 16.9424 19.1267 17.538 20.3534 17.8667C20.5562 17.9211 20.7424 17.9606 20.9201 17.9927C20.592 18.4638 20.3752 19.0217 20.3072 19.6039C20.2197 20.3362 20.6955 21.0331 21.4103 21.2247C21.4827 21.2441 21.5613 21.26 21.6376 21.2649C21.9851 21.301 22.3043 21.2882 22.5804 21.2431C22.7672 21.8212 23.1189 22.3244 23.6193 22.7172C23.7821 22.8437 23.9601 22.9328 24.1581 22.9859C24.3561 23.0389 24.5597 23.052 24.7591 23.0227C25.3888 22.9326 25.945 22.6727 26.3958 22.2655C26.6172 22.4439 26.8824 22.6133 27.2014 22.7557C27.2712 22.7847 27.3472 22.8103 27.4197 22.8297C28.1344 23.0212 28.895 22.6556 29.1853 21.9777C29.4176 21.4394 29.5088 20.8479 29.4602 20.2758C29.6302 20.3369 29.8111 20.3957 30.0139 20.4501C31.2407 20.7788 32.2924 20.6982 33.1387 20.2055C33.9873 19.7237 34.5829 18.8532 34.9116 17.6265C35.3089 16.1438 35.501 14.4611 35.4653 12.7589ZM28.2653 21.5862C28.1668 21.8186 27.9138 21.932 27.6772 21.8686C27.653 21.8621 27.6289 21.8557 27.606 21.8444C26.5502 21.3803 26.3731 20.515 26.3731 20.515C26.3731 20.515 26.0198 21.8334 24.6143 22.0366C24.5451 22.0439 24.4784 22.0416 24.4156 22.0248C24.3528 22.0079 24.2891 21.9753 24.2376 21.9357C23.122 21.057 23.4753 19.7385 23.4753 19.7385C23.4753 19.7385 22.8893 20.3993 21.7429 20.2733C21.7174 20.2717 21.6933 20.2652 21.6691 20.2587C21.4325 20.1953 21.2701 19.9707 21.301 19.7201C21.3882 19.0084 21.7609 18.4095 22.2232 18.0364C22.3981 18.0212 22.5633 18.0033 22.7189 17.9829C23.3948 17.8948 24.0364 17.8183 25.4418 18.1949C26.8473 18.5715 27.3586 18.9621 27.9059 19.3728C28.0353 19.4695 28.1634 19.5712 28.3085 19.667C28.5224 20.2212 28.5505 20.9276 28.2653 21.5862ZM30.2715 19.489C28.3396 18.9713 28.5984 18.0054 25.7007 17.2289C22.8029 16.4525 22.5441 17.4184 20.6122 16.9008C18.6804 16.3831 17.9733 15.1584 18.4909 13.2265C20.0438 7.43099 25.7192 1.70478 29.5829 2.74006C33.4467 3.77534 35.4986 11.5721 33.9457 17.3676C33.4281 19.2995 32.2033 20.0066 30.2715 19.489Z"
        fill="#2A3632"
      />
      <path
        d="M11.5 2.40002C14.5 2.40002 15.5 3.40002 15.5 6.40002V12.4C15.5 16.4 13.5 18.4 9.5 18.4C6.5 18.4 3 16.4 3 12.9C3 11.9 3.5 10.4 5.5 10.4C7 10.4 7.5 9.90002 7.5 8.40002V6.40002C7.5 3.40002 8.5 2.40002 11.5 2.40002ZM11.5 1.40002C9.655 1.40002 8.475 1.76002 7.67 2.57002C6.86 3.37502 6.5 4.55502 6.5 6.40002V8.40002C6.5 9.07502 6.38 9.23002 6.355 9.25502C6.33 9.28002 6.175 9.40002 5.5 9.40002C3.08 9.40002 2 11.16 2 12.9C2 14.815 2.895 16.54 4.525 17.76C5.915 18.8 7.725 19.4 9.5 19.4C11.765 19.4 13.515 18.795 14.705 17.605C15.895 16.415 16.5 14.665 16.5 12.4V6.40002C16.5 4.55502 16.14 3.37502 15.33 2.57002C14.525 1.76002 13.345 1.40002 11.5 1.40002Z"
        fill="#2A3632"
      />
    </svg>
  );
};

const Favicon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.157 11.7023C5.6635 11.6385 6.18593 11.5714 7.27479 11.8632C8.36366 12.1549 8.78607 12.4752 9.1893 12.7828C9.30514 12.8703 9.4245 12.9587 9.55533 13.0465C9.80813 13.5923 9.81553 14.2531 9.56773 14.8267C9.42726 15.1542 9.06 15.3307 8.71226 15.2375C8.67714 15.2281 8.64295 15.2151 8.60526 15.2013C8.26462 15.0535 8.02898 14.8511 7.8629 14.656C7.62221 14.9642 7.23674 15.2788 6.62925 15.3683C6.53109 15.3834 6.43506 15.3765 6.33671 15.3501C6.23836 15.3238 6.15174 15.2817 6.07428 15.2196C5.59197 14.8419 5.41638 14.3732 5.36203 13.9859C5.12066 14.0718 4.81632 14.1258 4.44651 14.0869C4.4095 14.0846 4.37438 14.0751 4.33574 14.0648C3.98801 13.9716 3.75815 13.6352 3.80027 13.2813C3.87597 12.6616 4.20927 12.0921 4.70112 11.7458C4.86533 11.7371 5.00941 11.7192 5.157 11.7023Z"
        fill="#73E5BF"
      />
      <path
        d="M3.57409 11.6245C4.27307 11.8118 4.72124 11.755 5.15699 11.7023C5.66349 11.6385 6.18592 11.5714 7.27478 11.8632C8.36365 12.1549 8.78606 12.4752 9.18929 12.7828C9.53682 13.0453 9.89652 13.3186 10.599 13.5068C11.3963 13.7205 12.0675 13.6744 12.5975 13.3685C13.1274 13.0625 13.5029 12.5043 13.7165 11.7069C14.2728 9.63107 14.2327 7.08297 13.6062 4.89724C12.9388 2.56881 11.7301 1.01014 10.2865 0.623324C8.84288 0.236507 7.0168 0.982013 5.27462 2.66481C3.63821 4.24794 2.33041 6.43113 1.77419 8.50699C1.56054 9.30432 1.60659 9.97547 1.91257 10.5054C2.21856 11.0354 2.77677 11.4109 3.57409 11.6245Z"
        fill="#FF4070"
      />
      <path
        d="M10.0789 7.72052C10.2545 7.76758 10.6058 7.8617 10.3705 8.73981C10.1352 9.61793 9.78396 9.52381 9.60834 9.47675C9.43271 9.4297 9.08147 9.33558 9.31676 8.45746C9.55205 7.57935 9.90329 7.67347 10.0789 7.72052Z"
        fill="#2A3632"
      />
      <path
        d="M6.9177 6.87348C7.09333 6.92054 7.44457 7.01465 7.20928 7.89277C6.97399 8.77088 6.62275 8.67677 6.44712 8.62971C6.2715 8.58265 5.92026 8.48853 6.15555 7.61042C6.39084 6.73231 6.74208 6.82642 6.9177 6.87348Z"
        fill="#2A3632"
      />
      <path
        d="M9.25124 4.48704C9.42686 4.53409 9.77811 4.62821 9.54282 5.50632C9.30753 6.38444 8.95628 6.29032 8.78066 6.24326C8.60504 6.19621 8.25379 6.10209 8.48908 5.22398C8.72437 4.34586 9.07562 4.43998 9.25124 4.48704Z"
        fill="#2A3632"
      />
      <path
        d="M2.84425 5.14577C3.45846 4.13202 4.21362 3.18238 5.0215 2.40122C5.85988 1.59059 6.75425 0.964366 7.61178 0.588034C8.60875 0.154948 9.54115 0.0471428 10.3806 0.27208C11.2201 0.497017 11.9737 1.05658 12.617 1.92919C13.1715 2.68387 13.6329 3.67337 13.9537 4.79459C14.2628 5.87504 14.4419 7.07502 14.467 8.26007C14.4964 9.49899 14.3567 10.7227 14.0678 11.801C13.8287 12.6932 13.3956 13.3263 12.7775 13.6802C12.1619 14.0386 11.3971 14.0971 10.5049 13.8581C10.3574 13.8186 10.2258 13.7758 10.1022 13.7314C10.1375 14.1474 10.0712 14.5776 9.90229 14.9691C9.69112 15.4621 9.138 15.728 8.61815 15.5887C8.56547 15.5746 8.51021 15.556 8.46034 15.5314C8.22834 15.4278 8.03196 15.3037 7.87447 15.1749C7.54665 15.471 7.14213 15.66 6.68411 15.7256C6.53558 15.746 6.39106 15.7374 6.24705 15.6988C6.10304 15.6602 5.97007 15.5945 5.85517 15.5034C5.49127 15.2177 5.23545 14.8517 5.09963 14.4314C4.89533 14.4632 4.66671 14.4735 4.41399 14.4472C4.35942 14.4401 4.30228 14.4285 4.2496 14.4144C3.72975 14.2751 3.38368 13.7683 3.44733 13.2357C3.4968 12.8123 3.65446 12.4065 3.89309 12.0639C3.76381 12.0405 3.62846 12.0118 3.48094 11.9723C2.58877 11.7332 1.95567 11.3 1.60178 10.6819C1.24248 10.0699 1.1839 9.30504 1.42296 8.41287C1.71189 7.33455 2.2028 6.20493 2.84425 5.14577ZM4.16915 13.3237C4.14668 13.5059 4.26478 13.6693 4.43689 13.7154C4.45445 13.7201 4.47201 13.7248 4.49051 13.726C5.3243 13.8177 5.75048 13.3371 5.75048 13.3371C5.75048 13.3371 5.49355 14.296 6.30489 14.935C6.34584 14.9648 6.38868 14.9876 6.43434 14.9998C6.48001 15.012 6.532 15.0147 6.57886 15.0084C7.60102 14.8607 7.85796 13.9018 7.85796 13.9018C7.85796 13.9018 7.98674 14.5311 8.75464 14.8686C8.77126 14.8768 8.78882 14.8815 8.80638 14.8862C8.97849 14.9324 9.16247 14.8499 9.23412 14.6809C9.43801 14.2009 9.42106 13.6881 9.26553 13.2851C9.16092 13.2119 9.06333 13.1405 8.97276 13.0711C8.57913 12.7698 8.20281 12.4883 7.18068 12.2144C6.15856 11.9406 5.69446 12.0007 5.20038 12.0603C5.08371 12.0742 4.9661 12.0916 4.83984 12.0992C4.50362 12.3705 4.22904 12.8052 4.16915 13.3237ZM3.66823 11.2733C5.07321 11.6497 5.26144 10.9472 7.36892 11.5119C9.47639 12.0766 9.28816 12.7791 10.6931 13.1556C12.0981 13.5321 12.9888 13.0178 13.3653 11.6128C14.4947 7.39787 13.0024 1.7275 10.1924 0.974572C7.38243 0.221643 3.25484 4.38616 2.12545 8.6011C1.74898 10.0061 2.26324 10.8968 3.66823 11.2733Z"
        fill="#2A3632"
      />
    </svg>
  );
};
