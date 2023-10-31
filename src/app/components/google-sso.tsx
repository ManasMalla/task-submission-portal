import { useRef, useEffect } from "react";
declare const google: any;

const GoogleSSO = (props: { onSuccess: (arg0: any) => void }) => {
  const g_sso = useRef(null);

  useEffect(() => {
    if (g_sso.current) {
      google.accounts.id.initialize({
        client_id:
          "1010379975924-uu04sdp61suebvkkvshj7vgbcu4aami2.apps.googleusercontent.com",
        callback: (res: any, error: any) => {
          props.onSuccess(res);
        },
      });
      google.accounts.id.renderButton(g_sso.current, {
        theme: "outline",
        size: "large",
        type: "standard",
        text: "signin_with",
        shape: "pill",
        logo_alignment: "left",
        width: "220",
      });
    }
  }, [g_sso.current]);

  return <div ref={g_sso} />;
};

export default GoogleSSO;
