<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
<body onLoad="createnode()">
<h2>A chat use xml</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th align="left">To</th>
      <th align="left">From</th>
      <th align="left">Mess</th>
      <th align="left">An</th>
   </tr>
    <xsl:for-each select="/notebook/note">
     <tr>
      <td><xsl:value-of select="to"/></td>
      <td><xsl:value-of select="from"/></td>
      <td id="demo"><xsl:value-of select="mess"/></td>
     <td>
     <button onclick="docp()">
     <xsl:value-of select="an"/>
     </button>
     </td>  
    </tr> 
   </xsl:for-each>
   </table>
   
<ul>
<xsl:for-each select="/notebook/note">
<li><xsl:value-of select="to"/></li>
<ul>
<li><xsl:value-of select="from"/></li>
<li><xsl:value-of select="mess"/></li>
<ul>
<li>one.2.*</li>
<ul>
<li>one.2.*.*</li>
</ul>
</ul>
</ul>
<li>two</li>
<ul>
<li>two.1</li>
</ul>
</xsl:for-each>
</ul>
<form id="form1" onsubmit="validate_form(this)">
  email:<input name="email" onfocus="change(this)"></input>
       <br/>
       <input name="button" type="submit" value="submit"/>
       <p id="oneo" onclick="dscp()">one</p>
</form>
  <img id="image" src="../../img/1.jpg"/>


  
<script src="cp.js"></script>
</body>
</html>
	</xsl:template>
</xsl:stylesheet>