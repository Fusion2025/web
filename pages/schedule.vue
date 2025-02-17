<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="auto">
        <h1 class="page-title">Schedule</h1>
        <h1 class="page-title" style="color: red">(Preliminary)</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-row no-gutters justify="center">
          <v-col cols="12" md="6">
            <v-card class="px-4 pb-4 mt-4">
              <v-card-title class="px-0 card-title">
                <h2>Monday, July 7th</h2>
              </v-card-title>
              <v-table class="text-center schedule-table">
                <colgroup>
                  <col span="1" class="schedule-col-1" />
                  <col span="1" class="schedule-col-2" />
                </colgroup>
                <tbody>
                  <tr>
                    <td class="td-1">10:00 - 19:00</td>
                    <td class="td-1">
                      Boot camp
                      <NuxtLink to="/bootcamp" class="calendar-link">
                        <v-icon icon="mdi-calendar-clock" size="x-small" />
                      </NuxtLink>
                    </td>
                  </tr>
                  <tr>
                    <td class="td-n">20:00</td>
                    <td class="td-n">Welcoming event</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters justify="center">
          <v-col cols="12" md="6">
            <v-card class="px-4 pb-4 mt-4">
              <v-card-title class="px-0 card-title">
                <h2>Tuesday, July 8th</h2>
              </v-card-title>
              <v-table class="text-center schedule-table">
                <colgroup>
                  <col span="1" class="schedule-col-1" />
                  <col span="1" class="schedule-col-2" />
                </colgroup>
                <tbody>
                  <tr>
                    <td class="td-1">10:00 - 19:00</td>
                    <td class="td-1">
                      Tutorials
                      <NuxtLink to="/tutorials" class="calendar-link">
                        <v-icon icon="mdi-calendar-clock" size="x-small" />
                      </NuxtLink>
                    </td>
                  </tr>
                  <tr>
                    <td class="td-n">20:00</td>
                    <td class="td-n">Ice-breaker event</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters justify="center">
          <v-col cols="12" md="6">
            <v-card class="px-4 pb-4 mt-4">
              <v-card-title class="px-0 card-title">
                <h2>Wednesday, July 9th</h2>
              </v-card-title>
              <v-table class="text-center schedule-table">
                <colgroup>
                  <col span="1" class="schedule-col-1" />
                  <col span="1" class="schedule-col-2" />
                </colgroup>
                <tbody>
                  <tr>
                    <td class="td-1">09:45</td>
                    <td class="td-1">Welcoming</td>
                  </tr>
                  <tr>
                    <td class="td-n">10:00</td>
                    <td class="td-n">Keynote</td>
                  </tr>
                  <tr>
                    <td class="td-n">11:00 - 13:00</td>
                    <td class="td-n">Paper session</td>
                  </tr>
                  <tr>
                    <td class="td-n">13:00 - 14:30</td>
                    <td class="td-n">Coffee break</td>
                  </tr>
                  <tr>
                    <td class="td-n">14:30 - 16:30</td>
                    <td class="td-n">Paper session</td>
                  </tr>
                  <tr>
                    <td class="td-n">16:30 - 17:00</td>
                    <td class="td-n">Coffee break</td>
                  </tr>
                  <tr>
                    <td class="td-n">17:00 - 19:00</td>
                    <td class="td-n">Paper session</td>
                  </tr>
                  <tr>
                    <td class="td-n">20:00</td>
                    <td class="td-n">Opening event</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters justify="center">
          <v-col cols="12" md="6">
            <v-card class="px-4 pb-4 mt-4">
              <v-card-title class="px-0 card-title">
                <h2>Thursday, July 10th</h2>
              </v-card-title>
              <v-table class="text-center schedule-table">
                <colgroup>
                  <col span="1" class="schedule-col-1" />
                  <col span="1" class="schedule-col-2" />
                </colgroup>
                <tbody>
                  <tr>
                    <td class="td-1">09:45</td>
                    <td class="td-1">Welcoming</td>
                  </tr>
                  <tr>
                    <td class="td-n">10:00</td>
                    <td class="td-n">Keynote</td>
                  </tr>
                  <tr>
                    <td class="td-n">11:00 - 13:00</td>
                    <td class="td-n">Paper session</td>
                  </tr>
                  <tr>
                    <td class="td-n">13:00 - 14:30</td>
                    <td class="td-n">Coffee break</td>
                  </tr>
                  <tr>
                    <td class="td-n">14:30 - 16:30</td>
                    <td class="td-n">Paper session</td>
                  </tr>
                  <tr>
                    <td class="td-n">16:30 - 17:00</td>
                    <td class="td-n">Coffee break</td>
                  </tr>
                  <tr>
                    <td class="td-n">17:00 - 19:00</td>
                    <td class="td-n">Paper session</td>
                  </tr>
                  <tr>
                    <td class="td-n">20:00</td>
                    <td class="td-n">Gala dinner</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters justify="center">
          <v-col cols="12" md="6">
            <v-card class="px-4 pb-4 mt-4">
              <v-card-title class="px-0 card-title">
                <h2>Friday, July 11th</h2>
              </v-card-title>
              <v-table class="text-center schedule-table">
                <colgroup>
                  <col span="1" class="schedule-col-1" />
                  <col span="1" class="schedule-col-2" />
                </colgroup>
                <tbody>
                  <tr>
                    <td class="td-1">09:45</td>
                    <td class="td-1">Welcoming</td>
                  </tr>
                  <tr>
                    <td class="td-n">10:00</td>
                    <td class="td-n">Keynote</td>
                  </tr>
                  <tr>
                    <td class="td-n">11:00 - 13:00</td>
                    <td class="td-n">Paper session</td>
                  </tr>
                  <tr>
                    <td class="td-n">13:00 - 14:30</td>
                    <td class="td-n">Lunch in the hotel</td>
                  </tr>
                  <tr>
                    <td class="td-n">15:00</td>
                    <td class="td-n">Board meeting</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.schedule-table td {
  font-size: x-large;
}
.schedule-table td:first-child {
  border-right-width: thin !important;
}
.schedule-col-1 {
  width: 20%;
}
.schedule-col-2 {
  width: 80%;
}
.td-1 {
  border: 0px solid rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  border-top-width: thin !important;
  border-bottom-width: thin !important;
}
.td-n {
  border: 0px solid rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  border-bottom-width: thin !important;
}
.calendar-link {
  color: #005047;
}
.card-title h2 {
  text-align: start;
}
</style>
