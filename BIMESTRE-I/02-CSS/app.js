function injectStyle(cssText){
  const style = document.createElement('style');
  style.textContent = cssText;
  document.head.appendChild(style);
}

function attachExternalStylesheet(href){
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

document.addEventListener('DOMContentLoaded', () => {
  const btnInject = document.getElementById('btn-inject');
  const btnFetch = document.getElementById('btn-fetch');

  if (btnInject){
    btnInject.addEventListener('click', () => {
      injectStyle(`#inject-target { background:#f59e0b; color:black; padding:12px; border-radius:8px; }`);
    });
  }

  if (btnFetch){
    btnFetch.addEventListener('click', async () => {
      try{
        const res = await fetch('dynamic.css');
        if(!res.ok){
          throw new Error('No se pudo descargar dynamic.css');
        }
        const css = await res.text();
        injectStyle(css);
      }catch(err){
        console.error(err);
        alert('Error al cargar estilos desde el servidor. Asegúrate de ejecutar http-server.');
      }
    });
  }
});
