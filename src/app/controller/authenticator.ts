import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
    providedIn: 'root',
})
export class Authenticator {
    constructor(private firebaseAuth: AngularFireAuth){
        
    }

    async login(email:string, password:string){
        return new Promise((resolve, reject)=>{
            this.firebaseAuth.signInWithEmailAndPassword(email, password)
            .then(res => {
              if (res.user) {
                resolve(Authenticator.OK_LOGIN);
              }
            })
            .catch(err => {
                reject(Authenticator.FAIL_LOGIN)
            });
        });
    }

    async register(email:string, password:string, name:string){
        return new Promise((resolve, reject) =>{
            try{
                this.firebaseAuth.createUserWithEmailAndPassword(email, password)
                .then(res => {
                    res.user.updateProfile({
                        displayName: name
                    });
                    resolve(Authenticator.OK_REGISTRATION);
                })
                .catch(err => {
                    // get log error here when debugging
                    reject(Authenticator.FAIL_REGISTRATION);
                });
            }catch(err){
                reject(Authenticator.FAIL_REGISTRATION);
            }
        });
    }

    async checkUser(){
        return new Promise((resolve, reject)=>{
            this.firebaseAuth.onAuthStateChanged(user => {
                if (user) {
                    resolve(Authenticator.HAS_USER);
                }
                else {
                    resolve(Authenticator.NO_USER);
                }
          });
        });
    }

    async logout(){
        return new Promise((resolve, reject)=>{
            this.firebaseAuth
                .signOut()
                .then(() => {
                    resolve(Authenticator.OK_LOGOUT);
                })
                .catch(() => {
                    reject(Authenticator.FAIL_LOGOUT);
                });
        })
    }

    static readonly HAS_USER = 0x01;
    static readonly NO_USER = 0x02;

    static readonly OK_REGISTRATION = 0x03;
    static readonly FAIL_REGISTRATION = 0x04;

    static readonly OK_LOGIN = 0x05;
    static readonly FAIL_LOGIN = 0x06;

    static readonly OK_LOGOUT = 0x07;
    static readonly FAIL_LOGOUT = 0x08;
}