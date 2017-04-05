+++
tags = ["C#", "sql-server", "stored-procedure", "strong-type"]
featured = false
description = ""
date = "2012-05-14T00:00:00"
share = true
image = ""
title = "Strongly typed Stored Procedure names in C#"
slug = "strongly-typed-stored-procedure-names-in-c-sharp"
author = ""
draft = false
menu = ""
comments = true

+++

Calling SQL Stored Procedures in ASP.NET as simple text strings can cause problems such as:

Typo in Stored Procedure name. This isn’t a huge issue, but it can be costly if you later need to rebuild the application because of a simple typo!
Finding all references to a Stored Procedure. As the stored procedure is stored as a string, the only way you can find all occurrences of the stored procedure is by doing a “Find In Files”. This works fine unless you’re searching for “spFoo” and “spFooBar” also exists.

~~~~
SqlCommand cmd = new SqlCommand("sp_Foo", conn);
~~~~

An alternative way would be to store the stored procedure names in a class with a value the same as its name. For example:

~~~~
public static class StoredProcedureNames {      
   public static string sp_Foo = "sp_Foo";    
}
~~~~

Then the stored procedure can be called like:

~~~~
SqlCommand cmd = new SqlCommand(StoredProcedureNames.sp_Foo, conn);
~~~~

Therefore the stored procedure is now strongly typed, and can be picked up with intellisense.
