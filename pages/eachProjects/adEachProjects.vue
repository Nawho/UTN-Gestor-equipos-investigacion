<template>
  <div>
    <h1 class="text-center font-sans text-2xl">Nombre del projecto</h1>
    <div class="caracteristicas">
      <div class="fechas">
        <p style="color: #61697c">Fecha inicio: 12/3/2023</p>
        <p style="color: #61697c">Fecha final: 05/7/2024</p>
      </div>
      <p>
        Brogas fue fundada en el año 1958 por el Sr. León, quien comenzó el
        desafío de armar faroles a kerosene sin capital, pero con esfuerzo y
        habilidad en el negocio; luego junto a su hermano Isaac,logró obtener
        las matrices para dar sus primeros pasos en el rubro.Con el correr de
        los años la empresa fue invirtiendo en matricería y así comenzó con la
        fabricación decalentadores, estufas y faroles a kerosene.En los años 90
        se sumaron a la empresa su mujer y sus hijos, dando un nuevo impulso a
        la empresapara lograr un crecimiento progresivo en los últimos 20 años,
        manteniendo los mismos valores queen sus comienzos: compañerismo, buen
        trato y confianza en el grupo de trabajo.Transcurridos ya 65 años de su
        existencia, Brogas amplió su espectro de negocios sumandodistintos
        rubros tales como: camping y aire libre; ferretería, hogar, bazar,
        sanitarios, corralónentre otros.
        <br />
        Todos estos logros se basan en los siguientes pilares: <br />
        <span style="color: orange">||</span> Una consistente política de
        exportación <br />
        <span style="color: orange">||</span> Innovación permanente. <br />
        <span style="color: orange">||</span> Actualización constante de un
        modelo de distribución y ventas que cubra las necesidades desus
        clientes.
        <br />
        BROGAS S.A. hoy goza de un reconocido prestigio en el mercado por la
        calidad de sus productos.La empresa Brogas S.A. tiene certificado su
        Sistema deGestión de la Calidad por IRAM según norma 9001:2015con número
        de registro RI-9000-8730. Cuyo alcance esla fabricación y
        comercialización de cocinas, estufas ycalefactores domésticos;
        comercialización de artículosde camping.
      </p>
    </div>


    <div style="background-color: #17233f;" class="overflow-x-auto mb-10">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="../../public/imgs/persona1.jpeg"
                      alt="Imagen"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Juansito Riñones</div>
                  <div class="text-sm opacity-50">China</div>
                </div>
              </div>
            </td>
            <td>
              <span class="badge badge-ghost badge-sm" style="background-color: #0f1729; padding: 3%; font-weight:900;">Desktop Support Technician</span
              >
            </td>
            <td>juansito123@gmail.com</td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          <!-- row 2 -->
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="../../public/imgs/persona2.jpeg"
                      alt="Imagen"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Luciano Pelpezo</div>
                  <div class="text-sm opacity-50">Perú</div>
                </div>
              </div>
            </td>
            <td>
              <span class="badge badge-ghost badge-sm" style="background-color: #0f1729; padding: 3%; font-weight:900;">Tax Accountant</span>
            </td>
            <td>lolazo@gmail.com</td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          <!-- row 3 -->
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="../../public/imgs/persona3.jpeg"
                      alt="Imagen"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Jesus Strax</div>
                  <div class="text-sm opacity-50">Russia</div>
                </div>
              </div>
            </td>
            <td>
              <span class="badge badge-ghost badge-sm" style="background-color: #0f1729; padding: 3%; font-weight:900;">Office Assistant I</span>
            </td>
            <td>jerusalen@gmail.com</td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          <!-- row 4 -->
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="../../public/imgs/persona4.jpeg"
                      alt="Imagen"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Lero Perez</div>
                  <div class="text-sm opacity-50">Argentina</div>
                </div>
              </div>
            </td>
            <td>
              <span class="badge badge-ghost badge-sm" style="background-color: #0f1729; padding: 3%; font-weight:900;">Community Outreach Specialist</span
              >
            </td>
            <td>pupipupi@gmail.com</td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup></script>

<style>
.caracteristicas {
  padding: 3%;
  background-color: #17233f;
  margin-top: 5%;
  margin-bottom: 5%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.fechas {
  display: flex;
  flex-direction: row;
  gap: 2%;
  margin-bottom: 1%;
}
h2 {
  font-size: 20px;
  margin-bottom: 1.5%;
}
.integrantes {
  margin-bottom: 1%;
  background-color: #3abff8;
  color: #182730;
  padding: 0.5%;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  gap: 70%;
  font-weight: bold;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
</style>
