import { useMutation } from '@tanstack/react-query'
import React from 'react'
import userCreationService from '../services/userCreationService '
import User from '../entities/User'
import { AxiosError } from 'axios'

const useCreateUser = () => {
    return useMutation<any, AxiosError<any,any>, User>({
        mutationFn: (user: User) => userCreationService.post(user),
        // onSuccess: (savedUser, newUser)=>{
        //     console.log(savedUser);
        // },
        onError(error){
            return error;
        }
    })
}

export default useCreateUser