/*function mostrarCronograma() {
    const dias = document.getElementsByClassName('nombre-dia');
    const fechas = document.getElementsByClassName('fecha-dia');
    const nombreCursos = document.getElementsByClassName('nombre-curso');
    const horasCursos = document.getElementsByClassName('hora-curso-grid');
    const tiposCursos = document.getElementsByClassName('tipo-curso-grid');

    for (let i = 0; i < cursosAsignados.length; i++) {
        dias[i].textContent = cursosAsignados[i].Dia;
        fechas[i].textContent = cursosAsignados[i].Fecha;
        nombreCursos[i].textContent = cursosAsignados[i].Nombre_curso;
        horasCursos[i].textContent = cursosAsignados[i].Horario;
        tiposCursos[i].textContent = cursosAsignados[i].Tipo_clase;
    }
}

window.onload = mostrarCronograma;*/

function mostrarCronograma () {
    const container = document.getElementById('cronograma-container');

    cursosAsignados.forEach(curso => {
        const article = document.createElement('article');

        const divFlex = document.createElement('div');
        divFlex.className ='d-flex flex-row gap-3 mt-1';

        const divFecha = document.createElement('div');
        divFecha.className = 'fecha d-flex flex-column justify-content-start align-items-center';
        
        const spanDia = document.createElement('span');
        spanDia.className = 'nombre-dia';
        spanDia.textContent = curso.Dia;

        const spanFecha = document.createElement('span');
        spanFecha.className = 'fecha-dia';
        spanFecha.textContent = curso.Fecha;

        divFecha.appendChild(spanDia);
        divFecha.appendChild(spanFecha);

        const divInfo = document.createElement('a');
        divInfo.className = 'w-100';

        const linkCurso = document.createElement('a');
        linkCurso.href = '#';
        linkCurso.className = 'text-decoration-none';

        const spanNombreCurso = document.createElement('span');
        spanNombreCurso.className = 'nombre-curso text-uppercase lh-1';
        spanNombreCurso.textContent = curso.Nombre_curso;

        linkCurso.appendChild(spanNombreCurso);

        const divInfoCursoGrid = document.createElement('div');
        divInfoCursoGrid.className = 'info-curso-grid lh-sm';

        const spanTituloHora = document.createElement('span');
        spanTituloHora.className = 'titulo-hora-grid';
        spanTituloHora.textContent = 'Hora:';

        const spanHoraCurso = document.createElement('span');
        spanHoraCurso.className = 'hora-curso-grid';
        spanHoraCurso.textContent = curso.Horario;

        const spanTituloClase = document.createElement('span');
        spanTituloClase.className = 'titulo-clase-grid';
        spanTituloClase.textContent = 'Clase:';

        const spanTipoCurso = document.createElement('span');
        spanTipoCurso.className = 'tipo-curso-name';
        spanTipoCurso.textContent = curso.Tipo_clase; 

        divInfoCursoGrid.appendChild(spanTituloHora);
        divInfoCursoGrid.appendChild(spanHoraCurso);
        divInfoCursoGrid.appendChild(spanTituloClase);
        divInfoCursoGrid.appendChild(spanTipoCurso);

        divInfo.appendChild(linkCurso);
        divInfo.appendChild(divInfoCursoGrid);

        divFlex.appendChild(divFecha);
        divFlex.appendChild(divInfo);

        article.appendChild(divFlex);

        container.appendChild(article)


    }); 
}

document.addEventListener('DOMContentLoaded', mostrarCronograma);