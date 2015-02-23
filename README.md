jQuery.visibilityFadeOut()
=========================

Copyright (c) 2015 by Eric Christenson (eric.j.christenson[at]gmail[dot]com)<br />
Licensed under the MIT Public License (http://opensource.org/licenses/MIT).

A version of jQuery.fadeOut() that uses 'visibility' CSS styling. jQuery.visibilityFadeOut() is useful because jQuery.fadeOut() only uses "display" CSS properties, which differ from "visibility" CSS properties.


**Example**
<pre>
&lt;html&gt;
&lt;script type="text/javascript"&gt;
&lt;!--
$(function() {
    $('#foo').visibilityFadeOut();
});
//--&gt;
&lt;/script&gt;

&lt;h1 id="foo" style="visibility:hidden">Foo&lt;/h1&gt;
&lt;/html&gt;
</pre>

The &lt;h1&gt; element will fade out over 1 second when the page loads. Since it's using "visibility" styling the spacing of the elements on the page will not change. This would not be true if $.fadeOut() was used instead. 
