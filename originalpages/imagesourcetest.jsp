
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta name="googlebot" content="index"/>
<meta name="robots" content="index,follow"/>
<meta name="robots" content="noodp"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>solestruck_About Us</title>

<link rel="shortcut icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" />
<link rel="icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" />
<script type="text/javascript" src="js/jquery-1.4.4.min.js"></script>
<script type="text/javascript"></script>


</head>
<body>
 <c:if test="${isS3==false}">
<h1>Images from Google storage</h1>


<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Finsk-shoes-116-97-(Cinza)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Haus-of-Price-shoes-The-Neptune-(Multi)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Jeffrey-Campbell-shoes-Coltrane-(Black-Distressed)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Jeffrey-Campbell-shoes-Damsel-(Cat-Tapestry)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Jeffrey-Campbell-shoes-Damsel-Leather-(Black-Distressed)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Jeffrey-Campbell-shoes-Elegant-Stud-(Black-Pewter)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Jeffrey-Campbell-shoes-Lita-(Beige-Lace-Tan)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Jeffrey-Campbell-shoes-Lita-(Black-Distressed-Leather)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Jeffrey-Campbell-shoes-Lita-(Black-Suede)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Jeffrey-Campbell-shoes-Lita-(Cosmic)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Jeffrey-Campbell-shoes-Lita-(Multi-Glitter)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Jeffrey-Campbell-shoes-Lita-(Navy-Suede)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Jeffrey-Campbell-shoes-Lita-(Pewter-Glitter)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Jeffrey-Campbell-shoes-Night-Lita-(Black-Distressed)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Jeffrey-Campbell-shoes-Night-Nail-(Black-Suede)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Jeffrey-Campbell-shoes-Night-Spike-(Nude-Silver)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Jeffrey-Campbell-shoes-Night-Walk-(Black-Suede)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Jeffrey-Campbell-shoes-Perfect-2-(Black-Suede)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Jeffrey-Campbell-shoes-Shadow-Stud-(Black-Silver)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Jeffrey-Campbell-shoes-Springer-(Tan)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/test_images/Jeffrey-Campbell-shoes-Zip-2-Stud-(Black-White-Jaguar)-010407.jpg"/>
</c:if> 

<c:if test="${isS3}">
<h1>Images from S3 storage</h1>

<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Finsk-shoes-116-97-(Cinza)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Haus-of-Price-shoes-The-Neptune-(Multi)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Jeffrey-Campbell-shoes-Coltrane-(Black-Distressed)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Jeffrey-Campbell-shoes-Damsel-(Cat-Tapestry)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Jeffrey-Campbell-shoes-Damsel-Leather-(Black-Distressed)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Jeffrey-Campbell-shoes-Elegant-Stud-(Black-Pewter)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Jeffrey-Campbell-shoes-Lita-(Beige-Lace-Tan)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Jeffrey-Campbell-shoes-Lita-(Black-Distressed-Leather)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Jeffrey-Campbell-shoes-Lita-(Black-Suede)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Jeffrey-Campbell-shoes-Lita-(Cosmic)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Jeffrey-Campbell-shoes-Lita-(Multi-Glitter)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Jeffrey-Campbell-shoes-Lita-(Navy-Suede)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Jeffrey-Campbell-shoes-Lita-(Pewter-Glitter)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Jeffrey-Campbell-shoes-Night-Lita-(Black-Distressed)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Jeffrey-Campbell-shoes-Night-Nail-(Black-Suede)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Jeffrey-Campbell-shoes-Night-Spike-(Nude-Silver)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Jeffrey-Campbell-shoes-Night-Walk-(Black-Suede)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Jeffrey-Campbell-shoes-Perfect-2-(Black-Suede)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Jeffrey-Campbell-shoes-Shadow-Stud-(Black-Silver)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Jeffrey-Campbell-shoes-Springer-(Tan)-010407.jpg"/>
<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/images_sample/Jeffrey-Campbell-shoes-Zip-2-Stud-(Black-White-Jaguar)-010407.jpg"/>

</c:if> 
</body>
</html>