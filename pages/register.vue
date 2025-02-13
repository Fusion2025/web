<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="auto">
        <h1 class="page-title">Registration</h1>
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
              <th id="1" class="text-center"><b>Until May 15th</b></th>
              <th id="2" class="text-center"><b>After May 15th</b></th>
              <th id="2" class="text-center"><b>Onsite</b></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>FULL</td>
              <td>USD 675.00</td>
              <td>USD 775.00</td>
              <td>USD 875.00</td>
            </tr>
            <tr>
              <td>STUDENT</td>
              <td>USD 395.00</td>
              <td>USD 495.00</td>
              <td>USD 595.00</td>
            </tr>
            <tr>
              <td>SINGLE TUTORIAL</td>
              <td>USD 300.00</td>
              <td>USD 300.00</td>
              <td>USD 300.00</td>
            </tr>
            <tr>
              <td>BOOT CAMP</td>
              <td>USD 100.00</td>
              <td>USD 100.00</td>
              <td>USD 100.00</td>
            </tr>
          </tbody>
        </v-table>
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
