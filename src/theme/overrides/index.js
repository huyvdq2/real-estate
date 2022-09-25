import { merge } from '../../utils/merge';
import { AppBar } from './AppBar';
import { Button } from './Button';
import { Card } from './Card';
import { TextField } from './TextField';

export const MyComponents = merge(AppBar, Button, Card, TextField);
