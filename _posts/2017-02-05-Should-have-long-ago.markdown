---
layout: post
title:  "Should have long ago."
date:   2017-02-05 19:59:54 -0500
categories: jekyll update
---
I don't know why it has taken me so long to write and publish this.

Really, it's a bit of a dis-service to myself professionally not to have a website.
Especially in todays day and age!
Within hours; hell within [minutes]( https://www.jekyllnow.com "tutorial for building a static site fast") you could be up and running.

Granted, this isn't some fancy, full MEAN stack webapp.  Nor should it be.
Using the proper tools for the job is always a top priority, right?
I mean, writing some JAX backend for pumping messages out of a REST endpoint is fun, way beyond the scope of this site.

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
