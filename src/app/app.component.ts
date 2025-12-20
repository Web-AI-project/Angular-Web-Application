import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MES Data Dashboard';
  displayedColumns: string[] = [];
  dataSource: any[] = [];
  loading = false;
  error = '';
  searchTerm = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.error = '';
    
    this.dataService.getData().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.dataSource = data;
          this.displayedColumns = Object.keys(data[0]);
        } else {
          this.dataSource = [];
          this.displayedColumns = [];
          this.error = 'No data available';
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading data:', err);
        this.error = 'Failed to load data. Please check your connection and try again.';
        this.loading = false;
      }
    });
  }

  get filteredData() {
    if (!this.searchTerm) {
      return this.dataSource;
    }
    
    return this.dataSource.filter(row => {
      return Object.values(row).some(val => 
        String(val).toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }

  refresh() {
    this.loadData();
  }
}
