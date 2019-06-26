<template>
<v-container>
  <div class="resumeTitle"> RESUME </div>
    <v-layout column>
      <v-flex v-for="i in items" :key="i.id">
        <resume-item
        :sectionTitle="i.sectionTitle"
        :data="i.data"/>
      </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import ResumeItem from './ResumeItem'

export default {
  components: { ResumeItem },
  data () {
    return {
      items: [
        {
          id: '1',
          sectionTitle: 'Work Experience',
          data: [
            {
              title: 'STUDENT TRAINEE – SOFTWARE ENGINEER, MAIBORNWOLFF GMBH, FRANKFURT AM MAIN (GERMANY)',
              date: '10/2016 - 8/2019',
              description: 'Testing functionality of Telekom Smart Home application, Draw up of test schedules, First experience with automated test procedures with QBot'
            },
            {
              title: 'STUDENT TRAINEE – MOBILE APPLICATION TESTER – DEUTSCHE TELEKOM: PRODUCTS & INNOVATIONS, DARMSTADT (GERMANY)',
              date: '09/2015 – 03/2016',
              description: 'Infrastructure as code (Vagrant + Ansible), JIRA Rest API (Ruby), GitLab Continuous Integration'
            }
          ]
        },
        {
          id: '2',
          sectionTitle: 'Education',
          data: [
            {
              title: 'TECHNICAL UNIVERSITY OF DARMSTADT, M. SC. COMPUTER SCIENCE',
              date: 'since 10/2017',
              description: 'Master of Science Degree'
            },
            {
              title: 'TECHNICAL UNIVERSITY OF DARMSTADT, B. SC. COMPUTER SCIENCE',
              date: '10/2013 – 10/2017',
              description: 'Bachelor of Science Degree'
            },
            {
              title: 'WEIBELFELDSCHULE, UNIVERSITY ENTRANCE QUALIFICATION (ABITUR),DREIEICH (GERMANY)',
              date: '08/2005 – 06/2013',
              description: 'University Entrance Qualification'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.resumeTitle {
  font-size: 50px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>
