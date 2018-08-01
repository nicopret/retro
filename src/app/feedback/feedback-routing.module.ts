import { Routes } from '@angular/router';

import { FeedbackContentComponent } from './component/feedback-content/feedback-content.component';
import { FeedbackEvaluateComponent } from './component/feedback-evaluate/feedback-evaluate.component';
import { FeedbackRetroComponent } from './component/feedback-retro/feedback-retro.component';

export const FeedbackRoutes: Routes = [{
  path: '', component: FeedbackContentComponent
}, {
  path: 'evaluate/:key',
  component: FeedbackEvaluateComponent
}, {
  path: 'retro/:key',
  component: FeedbackRetroComponent
}];
