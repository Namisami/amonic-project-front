<template>
    <tr > <!-- Цикл по строкам -->
        <td class=" border-collapse border p-2 h-4">{{user.first_name}}</td> <!-- Номер строки -->
        <td class="border-collapse border  p-2">{{user.last_name}}</td> 
        <td class="border-collapse border  p-2">{{user.date_of_birth}}</td> 
        <td class="border-collapse border  p-2">{{user.role}}</td> 
        <td class="border-collapse border  p-2">{{user.email}}</td>
        <td class="border-collapse border  p-2">{{user.office}}</td> 
    </tr>
</template>
<script>
    export default {
    props: {
        user: {
            type: Object,
            required: true
            
        }
    }


};
</script>

