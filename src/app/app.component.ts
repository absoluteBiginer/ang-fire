import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title;
  desc;
  private dbPath = '/todos';
  todos: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    this.todos = this.db.object(this.dbPath).valueChanges();
  }

  ngOnInit() {
    //  this.data = getDatabase();
    this.todos.subscribe((val) => console.log(val));
  }
  save() {
    this.db.database
      .ref(this.dbPath)
      .push({ title: this.title, description: this.desc });
  }
}
