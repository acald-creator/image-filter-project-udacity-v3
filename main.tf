provider "aws" {
  region = "us-east-2"
}

resource "aws_s3_bucket" "s3_bucket_imagefilterapp" {
  bucket = "imagefilterapp-prod"
  acl    = "private"
}

resource "aws_s3_bucket_object" "s3_bucket_object_imagefilterapp" {
  bucket = aws_s3_bucket.s3_bucket_imagefilterapp.id
  key    = "beanstalk/imagefilterapp"
}