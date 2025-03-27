import React, { useEffect, useCallback } from 'react'
import appwriteService from '../../appwrite/conf'
import { Input, Button, Select, RTE } from "../index"
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Post({ post }) {
  const navigate = useNavigate()
  const userData = useSelector(state => state.auth.userData)
  const {register, handleSubmit, watch, setValue, getValues, control} = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "active"
    }
  })

  const slugTransform = useCallback((slug) => {
    if (slug && typeof slug === "string") {
      return slug
        .trim()
        .toLocaleLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    }

    return ""
  }, [])

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null
      if (file) {
        await appwriteService.deleteFile(post.featuredImage)
      }

      const dbPost = await appwriteService.updatePost(post.$id, {...data, featuredImage: file ? file.$id : undefined})
      if (dbPost) navigate(`/post/${dbPost.$id}`)

    } else {
      const file = await appwriteService.uploadFile(data.image[0])
      if (file) {
        const fileId = file.$id
        data.featuredImage = fileId

        const dbPost = await appwriteService.createPost({...data, userId: userData.$id})
        if (dbPost) navigate(`/post/${dbPost.$id}`)

      }
    }
  }

  useEffect(() => {
    const subscription = watch((value, {name}) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), {shouldValidate: true})
      }

      return () => subscription.unsubscribe()
    })
  }, [watch, slugTransform, setValue])

  return (
    <form onSubmit={handleSubmit(submit)}
      className='flex flex-wrap'
    >
      <div className='w-2/3 px-2'>
        {/* Title Input */}
        <Input 
          label="Title: "
          placeholder="Title"
          className="mb-4"
          {...register("title", {required: true})}
        />

        {/* Slug Input */}
        <Input 
          label="Slug: "
          placeholder="Slug"
          className="mb-4"
          {...register("slug", {required: true})}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {shouldValidate: true})
          }}
        />

        {/* RTE Input(Content) */}
        <RTE 
          label="Content"
          control={control}
          defaultValues={getValues("content")}
        />

        {/* Featured Image Input */}
        <Input 
          label="Featured Image"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", {required: !post})}
        />

        {post && (<div
          className='w-full mb-4'
        >
          <img 
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className='rounded-lg'
          />
        </div>)}

        <Select 
          label="Status"
          className="mb-4"
          options={["active", "inactive"]}
          {...register("status", {required: true})}
        />

        <Button 
          type='submit'
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >{post ? "Update" : "Submit"}</Button>

      </div>
    </form>
  )
}

