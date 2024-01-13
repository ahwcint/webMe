'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function LoginPage() {
  const [, forceUpdate] = useState<object>();
  const pathName = usePathname();
  let curUrl = useSearchParams();
  const curUrlOld = window.location.href;
  const route = useRouter();
  console.log(curUrl);
  const handleChang = (data: React.ChangeEvent<HTMLInputElement>) => {
    const text = data.target.value;
    let currentUrl = window.location.href;
    const separator = currentUrl.includes('?') ? '&' : '?';
    const newParams = `${separator}text=${encodeURIComponent(text)}`;
    if (currentUrl.includes('text=')) {
      currentUrl = currentUrl.replace(new RegExp(`text=[^&]*`), `text=${text}`);
    } else {
      currentUrl += newParams;
    }
    window.history.replaceState({}, document.title, currentUrl);
    // route.replace(`/login?text=${text}`, { scroll: false });
  };
  const rerender = () => {
    forceUpdate({});
  };
  console.log('router');
  return (
    <div>
      <div>add router item</div>
      <div>
        <input type="text" onChange={handleChang} />
        <span>this is url : {pathName + '/' + curUrl}</span>
        <button onClick={rerender}>re render nowwww</button>
      </div>
    </div>
  );
}
