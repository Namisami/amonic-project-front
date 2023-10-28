<template>
    <tr > <!-- Цикл по строкам -->
        <td class=" border-collapse border p-2 h-4">{{table.nae}}</td> <!-- Номер строки -->
        <td class="border-collapse border  p-2">{{table.lastname}}</td> 
        <td class="border-collapse border  p-2">{{table.age}}</td> 
        <td class="border-collapse border  p-2">{{table.userrole}}</td> 
        <td class="border-collapse border  p-2">{{table.email}}</td>
        <td class="border-collapse border  p-2">{{table.office}}</td> 
    </tr>
</template>
<script>
    export default {
    props: {
        table: {
            type: Object,
            required: true
            
        }
    }


};
</script>

