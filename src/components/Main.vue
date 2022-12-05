<script setup lang="ts">
import MainItem from './MainItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
</script>

<template>
  <MainItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>HTML</template>
    <p>HTML vs HTML 5</p>
    <p>DOM - document object model</p>
    <ul>
      <li>all HTML elements are objects</li>
    </ul>
    <br>
    <p>
      <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
      Name: <input type="text" name="fname">
      <input type="submit" value="Submit">
      </form>
    </p>
  </MainItem>

  <MainItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>CSS</template>
    <p>Selector - selects all HTML elements</p>
    <ul>
      <li>ex. class (.), id (#), div</li>
    </ul>
  </MainItem>

  <MainItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>JavaScript</template>
    <p>an <u>interpreted</u> language which means it is not directly executed but read and executed by another program</p>
    <ul>
      <li>it is both used for frontend and backend (node - server side)</li>
      <li>the script can be put in the head or body</li>
    </ul>
    <br>
    <p>Data structure</p>
    <p>	- array, binary tree, binary search tree, heap, hashing, graph,
	linked list, matrix, stack, queue</p>
    <br>
    <p>static data structure - has a fixed memory size (ex. array)</p>
    <p>dynamic data structure - size is not fixed (ex. queue, stack)</p>
    <br>
    <p>== compares the type, string is converted to a number (loose equality)</p>
    <ul>
      <li>2 == "2" (true)</li>
    </ul>
    <p>=== compares the value and type (strict equality)</p>
    <ul>
      <li>2 === "2" (false)</li>
    </ul>
    <br>
    <p>JavaScript value vs reference</p>
    <p>value - number, boolean, string, undefined, null</p>
    <p>reference - object, function, array</p>
    <br>
    <p>Fetch</p>
  </MainItem>

  <MainItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Other</template>
    <p>Agile - an iterative approach to help teams deliver value to their customers faster without negatively impacting release dates.</p>
    <p>JSP - Java Server Pages - server side technology</p>
    <p>Jira - work management tool</p>
  </MainItem>
</template>
