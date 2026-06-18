export async function loadGoogleMaps() {
    if (window.google && window.google.maps) {
        return;
    }
    
    const apiKey = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';

    const g = {
        key: apiKey,
        v: "weekly"
    };

    var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;
    b=b[c]||(b[c]={});
    const d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams;
    const u=()=>h||(h=new Promise(async(f,n)=>{
        await (a=m.createElement("script"));
        e.set("libraries",[...r]+"");
        for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);
        e.set("callback",c+".maps."+q);
        a.src=`https://maps.${c}apis.com/maps/api/js?`+e;
        d[q]=f;
        a.onerror=()=>h=n(Error(p+" could not load."));
        a.nonce=m.querySelector("script[nonce]")?.nonce||"";
        m.head.append(a)
    }));
    
    if (!d[l]) {
        d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n));
    }
    
    try {
        await d[l]('maps');
        await d[l]('marker');
    } catch (error) {
        console.error('Error loading Google Maps:', error);
    }
}
