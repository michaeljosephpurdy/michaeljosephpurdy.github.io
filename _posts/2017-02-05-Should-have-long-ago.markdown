---
layout: post
title:  "Should have long ago."
date:   2017-02-05 19:59:54 -0500
categories: blog 
---
I don't know why it has taken me so long to set up this site.

I purchased *purdy.tech* back in October of 2016.
Five months later, I have a page up.

Really, it's a bit of a dis-service to myself, professionally, for me to not to have a website.
Especially in todays day and age!
Within hours; hell within [minutes]( https://www.jekyllnow.com "tutorial for building a static site fast") you could be up and running.

Granted, this isn't some fancy, full-stack webapp.  Nor should it be.
Using the proper tools for the job is always a top priority, right?
I use a butter knife at times as a flathead, but only on my daughter's sound machine.
Regardless, writing some JAX backend for pumping messages out of a REST endpoint is fun, but way beyond the scope of this site.

{% highlight java %}
@Path("/message")
@GET
@Produces("text/plain")
public Response doGet() {
  String message = "poop";
  return Response.ok(message).build();
}
{% endhighlight %}
There will be none of this.

What this is, *however* is a small place to write my thoughts.
Maybe share any tech-findings and share my progress on the bike.
