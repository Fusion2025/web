<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="page-title">Registration</h1>
        <h3 class="page-content text-center pt-4">
          The register system is open at the following <a href="https://creacteve.com.br/en/proximos-eventos/fusion-2025/">link</a>.
        </h3>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="page-title">Registration Fees</h2>
      </v-col>
      <v-col cols="12" md="6">
        <v-table class="text-center fee-table">
          <thead>
            <tr>
              <th id="0" class="text-center"><b>Registration type</b></th>
              <th id="1" class="text-center"><b>Until June 1st</b></th>
              <th id="2" class="text-center"><b>After June 1st</b></th>
              <th id="3" class="text-center"><b>Onsite</b></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>FULL</td>
              <td>USD 675.00/ BRL 4.050 </td>
              <td>USD 775.00/ BRL 4.650</td>
              <td>USD 875.00/ BRL 5.250</td>
            </tr>
            <tr>
              <td>STUDENT</td>
              <td>USD 395.00/ BRL 2370</td>
              <td>USD 495.00/ BRL 2970</td>
              <td>USD 595.00/ BRL 3570</td>
            </tr>
            <tr>
              <td>SINGLE TUTORIAL</td>
              <td>USD 300.00 /BRL 1800</td>
              <td>USD 300.00 /BRL 1800</td>
              <td>USD 300.00 /BRL 1800</td>
            </tr>
            <tr>
              <td>BOOT CAMP</td>
              <td>USD 100.00 /BRL 600 </td>
              <td>USD 100.00 /BRL 600</td>
              <td>USD 100.00 /BRL 600</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="page-content text-center">
          Favorable exchange rates make everything extremely affordable in Rio.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.fee-table td,
.fee-table th {
  font-size: x-large;
}
</style>
