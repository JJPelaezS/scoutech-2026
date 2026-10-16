// Catálogo actualizado de SCOUTTECH 2026. Diseño original de la opción 3 conservado.
const juegos=[
  {
    "titulo": "Seguridad Olmeca con Skydimers",
    "tema": "Tecnología",
    "emoji": "🔐",
    "grado": "6.º grado",
    "autores": "Matías, Aldo, Karim, Ángel y Diego",
    "descripcion": "Aprende a navegar con seguridad junto a Skydimers.",
    "detalle": "Skydimers recorre un mundo digital donde debe identificar buenas acciones en Internet y evitar situaciones que ponen en riesgo los datos personales.",
    "aprendizaje": "Reconocer prácticas seguras en Internet, proteger la información personal y prevenir riesgos digitales.",
    "instrucciones": "Toca las acciones correctas y salta para evitar las incorrectas o riesgosas.",
    "archivo": "juegos/seguridad-olmeca.html",
    "disponible": true
  },
  {
    "titulo": "Cornelia, la abeja de las Orquídeas",
    "tema": "Naturaleza",
    "emoji": "🐝",
    "grado": "6.º grado",
    "autores": "Arturo, Inés, Rebecca, José Ernesto y Allison",
    "descripcion": "Ayuda a Cornelia a cuidar las plantas y la biodiversidad.",
    "detalle": "Cornelia, una abeja, debe identificar los árboles apropiados y enfrentarse a especies invasoras que afectan el entorno natural.",
    "aprendizaje": "Valorar la importancia de las abejas, las plantas y el equilibrio de los ecosistemas.",
    "instrucciones": "Selecciona los árboles adecuados y enfrenta a las especies invasoras siguiendo las indicaciones del juego.",
    "archivo": "juegos/cornelia.html",
    "disponible": true
  },
  {
    "titulo": "Guardianes de Tabasco",
    "tema": "Naturaleza",
    "emoji": "🌿",
    "grado": "6.º grado",
    "autores": "Scarlett, Ana Paula, Andrea, Camila y Ximena",
    "descripcion": "Protege los ecosistemas de Tabasco.",
    "detalle": "Una exploradora recorre Tabasco para recoger basura y capturar especies invasoras sin dañar a los animales nativos.",
    "aprendizaje": "Distinguir especies nativas e invasoras y comprender la importancia de mantener limpios los ecosistemas.",
    "instrucciones": "Recoge basura y captura especies invasoras; evita tocar a las especies nativas.",
    "archivo": "juegos/guardianes-de-tabasco.html",
    "disponible": true
  },
  {
    "titulo": "Capitán Triturador",
    "tema": "Naturaleza",
    "emoji": "🐜",
    "grado": "6.º grado",
    "autores": "Fabián, Héctor, Alex, Julio y Jesús Antonio",
    "descripcion": "Una hormiga valiente contra la contaminación de la selva.",
    "detalle": "El Capitán Triturador es una hormiga que tiene la misión de mantener limpia la selva de Tabasco recogiendo toda la basura posible.",
    "aprendizaje": "Tomar conciencia de la contaminación y de la importancia de cuidar las selvas.",
    "instrucciones": "Recoge la mayor cantidad de basura y esquiva los obstáculos durante tu misión.",
    "archivo": "juegos/capitan-triturador.html",
    "disponible": true
  },
  {
    "titulo": "Un día con la Flor",
    "tema": "Cultura",
    "emoji": "🌺",
    "grado": "5.º grado",
    "autores": "Regina, Silvia, Maximiliano y Sebastián",
    "descripcion": "Descubre la gastronomía y vestimenta tradicional de Tabasco.",
    "detalle": "Ayuda a una embajadora de la Flor Tabasco a reconocer platillos típicos y elegir la vestimenta para su evento de gala.",
    "aprendizaje": "Identificar platillos, prendas y tradiciones representativas de Tabasco.",
    "instrucciones": "Selecciona los alimentos típicos y después las prendas adecuadas para vestir a la embajadora.",
    "archivo": "juegos/un-dia-con-la-flor.html",
    "disponible": true
  },
  {
    "titulo": "Las grandes Aventuras de Pedro",
    "tema": "Naturaleza",
    "emoji": "🌊",
    "grado": "5.º grado",
    "autores": "Mía, José Emilio, Sergio y Julia",
    "descripcion": "Ayuda a Pedro a devolver la limpieza a los ríos.",
    "detalle": "Pedro limpia los ríos de Tabasco, recoge basura y atrapa especies invasoras acuáticas, cuidando a los animales nativos. El agua se vuelve más clara conforme avanza la limpieza.",
    "aprendizaje": "Comprender la importancia de proteger los ríos y distinguir las especies nativas de las invasoras.",
    "instrucciones": "Recoge basura, atrapa especies invasoras y evita chocar con las especies nativas.",
    "archivo": "juegos/aventuras-de-pedro.html",
    "disponible": true
  },
  {
    "titulo": "En busca de cacao",
    "tema": "Cultura",
    "emoji": "🍫",
    "grado": "5.º grado",
    "autores": "Sofía, Anna, Aaron y Jaziel",
    "descripcion": "Acompaña a un olmeca en busca del cacao.",
    "detalle": "Un personaje olmeca recolecta cacao para llevarlo a su comunidad, donde es importante para la alimentación y la economía.",
    "aprendizaje": "Reconocer el valor histórico, cultural y económico del cacao en Tabasco.",
    "instrucciones": "Recoge la mayor cantidad posible de cacao durante el recorrido.",
    "archivo": "juegos/en-busca-de-cacao.html",
    "disponible": true
  },
  {
    "titulo": "Rescatando al Jaguar",
    "tema": "Naturaleza",
    "emoji": "🐆",
    "grado": "5.º grado",
    "autores": "Iker, Mateo, Emiliano y Renata",
    "descripcion": "Rescata a un jaguar y conoce la fauna de Tabasco.",
    "detalle": "Un explorador intenta salvar a un jaguar de los cazadores mientras encuentra obstáculos y animales de distintas regiones.",
    "aprendizaje": "Reconocer la fauna regional y la importancia de proteger al jaguar.",
    "instrucciones": "Evita obstáculos y animales que no son de la región; gana puntos al encontrar animales locales.",
    "archivo": "juegos/jaguar.html",
    "disponible": true
  },
  {
    "titulo": "El Fogón Choco de Pablo",
    "tema": "Cultura",
    "emoji": "🍲",
    "grado": "4.º grado",
    "autores": "Adrián, Santiago, Alonso y Romina",
    "descripcion": "Cocina platillos tradicionales de Tabasco.",
    "detalle": "Pablo prepara recetas tradicionales con ingredientes propios de la gastronomía tabasqueña.",
    "aprendizaje": "Identificar ingredientes y platillos que forman parte de la cultura de Tabasco.",
    "instrucciones": "Selecciona los ingredientes adecuados para preparar los platillos solicitados.",
    "archivo": "juegos/fogon.html",
    "disponible": true
  },
  {
    "titulo": "Límpialo Choco",
    "tema": "Naturaleza",
    "emoji": "🚣",
    "grado": "4.º grado",
    "autores": "Ximena C., Elisa F. y Natalia",
    "descripcion": "Navega para limpiar los ríos y cuidar sus especies.",
    "detalle": "Recorre los ríos de Tabasco recogiendo basura y especies invasoras mientras proteges a los animales nativos.",
    "aprendizaje": "Comprender cómo la basura y las especies invasoras afectan a los ríos y su biodiversidad.",
    "instrucciones": "Recoge basura y especies invasoras, sin dañar a los animales nativos.",
    "archivo": "juegos/limpialo-choco.html",
    "disponible": true
  },
  {
    "titulo": "Sánalo Choco",
    "tema": "Naturaleza",
    "emoji": "🩺",
    "grado": "4.º grado",
    "autores": "Ximena J., Arantza, Carlos Aquiles y Elisa R.",
    "descripcion": "Responde preguntas y ayuda a sanar animales.",
    "detalle": "Conviértete en veterinario y ayuda a recuperar a diferentes animales de Tabasco contestando preguntas sobre ellos.",
    "aprendizaje": "Conocer características, alimentación, hábitats y cuidados de las especies regionales.",
    "instrucciones": "Responde correctamente las preguntas para atender y ayudar a sanar a cada animal.",
    "archivo": "juegos/sanalo.html",
    "disponible": true
  }
];
const grid=document.getElementById('grid'),filter=document.getElementById('filter'),count=document.getElementById('count'),dialog=document.getElementById('player'),frame=document.getElementById('game-frame');
function render(){const chosen=juegos.filter(j=>filter.value==='todas'||j.tema===filter.value);count.textContent=`${juegos.filter(j=>j.disponible&&j.archivo).length} de ${juegos.length} disponibles`;grid.replaceChildren();chosen.forEach(j=>{const card=document.createElement('article');card.className='card';const art=document.createElement('div');art.className='art';if(j.portada){const img=document.createElement('img');img.src=j.portada;img.alt=`Portada de ${j.titulo}`;art.append(img)}else{const em=document.createElement('span');em.className='emoji';em.textContent=j.emoji||'🎮';art.append(em)}const tag=document.createElement('span');tag.className='tag';tag.textContent=j.tema;art.append(tag);const body=document.createElement('div');body.className='card-body';const h=document.createElement('h3');h.textContent=j.titulo;const p=document.createElement('p');p.textContent=j.descripcion;const credit=document.createElement('div');credit.className='credit';credit.textContent=[j.grado,j.autores].filter(Boolean).join(' · ')||'Proyecto estudiantil · Colegio Scout';const btn=document.createElement('button');btn.className='play';btn.disabled=!(j.disponible&&j.archivo);btn.textContent=btn.disabled?'⏳ Próximamente':'▶ Jugar ahora';btn.addEventListener('click',()=>openGame(j));body.append(h,p,credit,btn);card.append(art,body);grid.append(card)})}
function openGame(j){
 document.getElementById('player-title').textContent=j.titulo;
 document.getElementById('info-title').textContent=j.titulo;
 document.getElementById('info-description').textContent=j.detalle||j.descripcion||'Videojuego educativo de SCOUTTECH 2026.';
 document.getElementById('info-learning').textContent=j.aprendizaje||'Conoce y valora la cultura, la naturaleza y la creatividad de Tabasco mediante el juego.';
 document.getElementById('instructions').textContent=j.instrucciones||'Sigue las indicaciones del propio videojuego. Haz clic dentro de la pantalla para activar el teclado.';
 document.getElementById('info-authors').textContent=j.autores||'Pendiente de agregar (con autorización).';
 document.getElementById('info-grade').textContent=j.grado||'Pendiente de confirmar';
 document.getElementById('player-layout').classList.remove('expanded');
 document.getElementById('expand').textContent='⤢ Ampliar juego';
 document.getElementById('expand').setAttribute('aria-pressed','false');
 frame.src=j.archivo;dialog.showModal();
}
function closeGame(){frame.src='about:blank';dialog.close()}
document.getElementById('close').addEventListener('click',closeGame);
dialog.addEventListener('close',()=>frame.src='about:blank');
dialog.addEventListener('click',e=>{if(e.target===dialog)closeGame()});
document.getElementById('expand').addEventListener('click',()=>{
 const layout=document.getElementById('player-layout');const expanded=layout.classList.toggle('expanded');
 const btn=document.getElementById('expand');btn.textContent=expanded?'⤡ Mostrar información':'⤢ Ampliar juego';btn.setAttribute('aria-pressed',String(expanded));
});
document.getElementById('fullscreen').addEventListener('click',()=>{if(frame.requestFullscreen)frame.requestFullscreen()});
filter.addEventListener('change',render);render();
