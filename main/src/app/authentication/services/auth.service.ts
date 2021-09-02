import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interface/usuario';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = false;
  public user: Usuario;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) { }

  async login(email: string, password: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const log = await this.afAuth.signInWithEmailAndPassword(email, password);
        localStorage.setItem('Usuario', log.user.email);
        const usuario = await this.getUserFirebasePromise(log.user.email);
        localStorage.setItem('idUsuario', usuario.uid.trim());        
        // localStorage.setItem('displayName', log.user.displayName);
        this.isLogged = true;
        resolve(log);
      } 
      catch (error) {
        resolve(null);
      }
    });

  }

  async loginWithFirebasePersistence(email: string, password: string): Promise<any> {
    return new Promise(async (resolve,reject) => {
      try {
        const userLogged = await this.afAuth.setPersistence(auth.Auth.Persistence.LOCAL).then(() =>{
          return this.afAuth.signInWithEmailAndPassword(email, password);
        }).
        catch((error) => {
          console.log(error.message);
        });
        localStorage.setItem('Usuario', userLogged['user']['email']);
        const usuario = await this.getUserFirebasePromise(userLogged['user']['email']);
        localStorage.setItem('idUsuario', usuario.uid.trim());
        // localStorage.setItem('displayName', userLogged['displayName']);
        this.isLogged = true;
        resolve(userLogged);
      } catch (error) {
        resolve(null);
      }
    });
  }

  async logOut() {
    try {
      await this.afAuth.signOut();
      this.isLogged = false;
      localStorage.removeItem('Usuario');
      localStorage.removeItem('idUsuario');
    } catch (error) {
      console.log(error);
    }
  }

  getUserFirebase(gmail: string) {
    return this.afs
    .collection(environment.coleccionUsuarios.usuarios, ref =>
      ref.where('email', '==', gmail))
    .snapshotChanges()
    .pipe(
      map((usuario) => {
        // console.log(usuario);
        return usuario.map((e) => {
          const usuario: Usuario = {
            uid: e.payload.doc.data()['uid'],
            email: e.payload.doc.data()['email'],
            displayName: e.payload.doc.data()['displayname'],
            emailVerified: e.payload.doc.data()['emailVerified'],
            // role: e.payload.doc.data()['role'],
          };
          return usuario;
        });
      })
    );
  }

  async getUserFirebasePromise(gmail: string): Promise<Usuario> {
    return new Promise(async (resolve, reject) => {
      const querySnapshot = await this.afs
        .collection(environment.coleccionUsuarios.usuarios, ref =>
          ref.where('email', '==', gmail))
        .get().toPromise();
      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        const usuario: Usuario = {
          uid: userData['uid'],
          email: userData['email'],
          displayName: userData['displayname'],
          emailVerified: userData['emailVerified']
        };
        resolve(usuario);
      } else {
        resolve(null);
      }
    });
  }

  getUserFirebaseById(id: string) {
    return this.afs
    .collection(environment.coleccionUsuarios.usuarios, ref =>
      ref.where('uid', '==', id))
    .snapshotChanges()
    .pipe(
      map((usuario) => {
        console.log(usuario);
        return usuario.map((e) => {
          const usuario: Usuario = {
            uid: e.payload.doc.data()['uid'],
            email: e.payload.doc.data()['email'],
            displayName: e.payload.doc.data()['displayname'],
            emailVerified: e.payload.doc.data()['emailVerified'],
            // role: e.payload.doc.data()['role'],
          };
          return usuario;
        });
      })
    );
  }

  async getUserByIdFirebasePromise(id: string): Promise<Usuario> {
    return new Promise(async (resolve, reject) => {
      const querySnapshot = await this.afs
        .collection(environment.coleccionUsuarios.usuarios, ref =>
          ref.where('uid', '==', id))
        .get().toPromise();
      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        const usuario: Usuario = {
          uid: userData['uid'],
          email: userData['email'],
          displayName: userData['displayname'],
          emailVerified: userData['emailVerified'],
          // role: userData['role'],
        };
        resolve(usuario);
      } else {
        resolve(null);
      }
    });
  }

  getCurrentUser(): Usuario {
    return this.user;
  }

}
